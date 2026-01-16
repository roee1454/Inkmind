import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const vercelToken = process.env.NEXT_PUBLIC_VERCEL_API_TOKEN;
    const projectId = process.env.NEXT_PUBLIC_VERCEL_PROJECT_ID;
    const envVariableName = "NEXT_PUBLIC_INSTAGRAM_TOKEN";

    if (!vercelToken || !projectId) {
      // Fallback to process.env if Vercel config is missing (e.g. local dev)
      const token = process.env.NEXT_PUBLIC_INSTAGRAM_TOKEN;
      if (token) return NextResponse.json({ token });
      return NextResponse.json(
        { error: "Vercel configuration missing and no local token found" },
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

    if (envVar?.value) {
      return NextResponse.json({ token: envVar.value });
    } else {
      return NextResponse.json(
        { error: "Token not found in Vercel" },
        { status: 404 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error", details: error },
      { status: 500 }
    );
  }
}
