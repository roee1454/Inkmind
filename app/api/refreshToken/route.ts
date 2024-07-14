import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  try {
    const response = await fetch(
      `https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=${process.env.NEXT_PUBLIC_INSTAGRAM_TOKEN}`
    );
    const data = await response.json();

    if (data.access_token) {
      const vercelToken = process.env.NEXT_PUBLIC_VERCEL_API_TOKEN; // Your Vercel API token
      const projectId = process.env.NEXT_PUBLIC_VERCEL_PROJECT_ID; // Your Vercel project ID
      const envVariableName = 'NEXT_PUBLIC_INSTAGRAM_TOKEN';

      const vercelResponse = await fetch(`https://api.vercel.com/v9/projects/${projectId}/env/${envVariableName}`, {
        method: 'PATCH',
        headers: {
          'Authorization': `Bearer ${vercelToken}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          value: data.access_token,
          target: ['production', 'preview', 'development'] // Specify the environments to update
        })
      });

      if (vercelResponse.ok) {
        return NextResponse.json({ message: 'Token refreshed and updated successfully', token: data.access_token });
      } else {
        const vercelError = await vercelResponse.json();
        return NextResponse.json({ error: vercelError.message, vercelToken, projectId }, { status: 500 });
      }
    } else {
      return NextResponse.json({ error: 'Failed to refresh token' }, { status: 500 });
    }
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
