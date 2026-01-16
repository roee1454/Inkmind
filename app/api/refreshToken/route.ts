import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const vercelToken = process.env.NEXT_PUBLIC_VERCEL_API_TOKEN;
    const projectId = process.env.NEXT_PUBLIC_VERCEL_PROJECT_ID;
    const envVariableName = "NEXT_PUBLIC_INSTAGRAM_TOKEN";

    if (!vercelToken || !projectId) {
      return NextResponse.json(
        { error: "Missing Vercel configuration" },
        { status: 500 }
      );
    }

    // 1. Fetch current environment variables from Vercel to get the LATEST token
    const envVarsResponse = await fetch(
      `https://api.vercel.com/v9/projects/${projectId}/env`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${vercelToken}`,
        },
      }
    );
    const envVarsData = await envVarsResponse.json();
    const envVar = envVarsData.envs.find(
      (env: any) => env.key === envVariableName
    );

    if (!envVar) {
      return NextResponse.json(
        { error: "Instagram token variable not found in Vercel" },
        { status: 404 }
      );
    }

    // 2. Refresh the token using the LIVE value from Vercel
    const refreshResponse = await fetch(
      `https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=${envVar.value}`
    );
    const data = await refreshResponse.json();

    if (data.access_token) {
      // 3. Update the existing environment variable in Vercel
      const updateResponse = await fetch(
        `https://api.vercel.com/v9/projects/${projectId}/env/${envVar.id}`,
        {
          method: "PATCH",
          headers: {
            Authorization: `Bearer ${vercelToken}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            value: data.access_token,
            target: ["production", "preview", "development"],
          }),
        }
      );

      if (updateResponse.ok) {
        return NextResponse.json({
          message: "Token refreshed and updated successfully",
          token: data.access_token,
        });
      } else {
        const vercelError = await updateResponse.json();
        return NextResponse.json(
          { error: "Failed to update Vercel env var", details: vercelError },
          { status: 500 }
        );
      }
    } else {
      return NextResponse.json(
        { error: "Failed to refresh token from Instagram", details: data },
        { status: 500 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error", details: error },
      { status: 500 }
    );
  }
}
