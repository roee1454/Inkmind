import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const apiKey = req.headers.get("x-api-key");
    const secretKey = process.env.API_SECRET_KEY;

    if (!secretKey) {
      return NextResponse.json(
        { error: "API_SECRET_KEY not configured on server" },
        { status: 500 }
      );
    }

    if (apiKey !== secretKey) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const vercelToken = process.env.NEXT_PUBLIC_VERCEL_API_TOKEN;
    const projectId = process.env.NEXT_PUBLIC_VERCEL_PROJECT_ID;
    const envVariableName = "NEXT_PUBLIC_INSTAGRAM_TOKEN";

    if (!vercelToken || !projectId) {
      return NextResponse.json(
        { error: "Missing Vercel configuration" },
        { status: 500 }
      );
    }

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

    const refreshResponse = await fetch(
      `https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=${envVar.value}`
    );
    const data = await refreshResponse.json();

    if (data.access_token) {
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
