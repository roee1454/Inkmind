import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  try {
    const token = process.env.NEXT_PUBLIC_INSTAGRAM_TOKEN;
    if (token) {
      return NextResponse.json({ token });
    } else {
      return NextResponse.json({ error: 'Token not found' }, { status: 404 });
    }
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
