import { NextRequest, NextResponse } from "next/server";
import { fetchInstagramData } from "@/lib/fetchInstagramData";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  try {
    const apiKey = req.headers.get("x-api-key");
    const secretKey = process.env.API_SECRET_KEY;
    const origin = req.headers.get("origin") || req.headers.get("referer") || "";

    // Allow if valid API key is provided OR if request comes from our own domain
    const isAuthorizedKey = secretKey && apiKey === secretKey;
    const isAuthorizedDomain = origin.includes("inkmindtattoos.com") || origin.includes("localhost");

    if (!isAuthorizedKey && !isAuthorizedDomain) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const { searchParams } = new URL(req.url);
    const limit = parseInt(searchParams.get("limit") || "12", 10);
    const after = searchParams.get("after") || undefined;

    const vercelToken = process.env.NEXT_PUBLIC_VERCEL_API_TOKEN;
    const projectId = process.env.NEXT_PUBLIC_VERCEL_PROJECT_ID;
    const envVariableName = "NEXT_PUBLIC_INSTAGRAM_TOKEN";

    let instagramToken: string | undefined;

    if (!vercelToken || !projectId) {
      instagramToken = process.env.NEXT_PUBLIC_INSTAGRAM_TOKEN;
    } else {
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
      instagramToken = envVar?.value;
    }

    if (!instagramToken) {
      return NextResponse.json(
        { error: "Instagram token not found" },
        { status: 404 }
      );
    }

    const data = await fetchInstagramData(instagramToken, limit, after);
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error in getToken proxy:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
