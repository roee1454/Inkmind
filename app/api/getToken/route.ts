import { NextRequest, NextResponse } from "next/server";
import { fetchInstagramData } from "@/lib/fetchInstagramData";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  try {
    const instagramToken = process.env.INSTAGRAM_ACCESS_TOKEN;

    if (!instagramToken) {
      console.error("INSTAGRAM_ACCESS_TOKEN is not defined in environment variables");
      return NextResponse.json(
        { error: "Instagram configuration missing" },
        { status: 500 }
      );
    }

    const { searchParams } = new URL(req.url);
    const limit = parseInt(searchParams.get("limit") || "12", 10);
    const after = searchParams.get("after") || undefined;

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

