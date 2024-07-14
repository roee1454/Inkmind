import { NextRequest, NextResponse } from 'next/server';


export async function GET(req: NextRequest) {
    try {
      const response = await fetch(
        `https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=${process.env.NEXT_PUBLIC_INSTAGRAM_TOKEN}`
      );
      const data = await response.json();
  
      if (data.access_token) {
        const vercelToken = process.env.NEXT_PUBLIC_VERCEL_API_TOKEN;
        const projectId = process.env.NEXT_PUBLIC_VERCEL_PROJECT_ID;
        const envVariableName = 'NEXT_PUBLIC_INSTAGRAM_TOKEN';
  
        // Fetch existing environment variables
        const envVarsResponse = await fetch(`https://api.vercel.com/v9/projects/${projectId}/env`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${vercelToken}`,
          },
        });
        const envVarsData = await envVarsResponse.json();
        
        // Check if the environment variable already exists
        const envVar = envVarsData.envs.find((env: any) => env.key === envVariableName);
  
        let vercelResponse;
  
        if (envVar) {
          // Update the existing environment variable
          vercelResponse = await fetch(`https://api.vercel.com/v9/projects/${projectId}/env/${envVar.id}`, {
            method: 'PATCH',
            headers: {
              'Authorization': `Bearer ${vercelToken}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              value: data.access_token,
              target: ['production', 'preview', 'development'],
            }),
          });
        } else {
          // Create a new environment variable
          vercelResponse = await fetch(`https://api.vercel.com/v9/projects/${projectId}/env`, {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${vercelToken}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              key: envVariableName,
              value: data.access_token,
              target: ['production', 'preview', 'development'],
            }),
          });
        }
  
        if (vercelResponse.ok) {
          return NextResponse.json({ message: 'Token refreshed and updated successfully', token: data.access_token });
        } else {
          const vercelError = await vercelResponse.json();
          return NextResponse.json({ error: vercelError }, { status: 500 });
        }
      } else {
        return NextResponse.json({ error: 'Failed to refresh token', details: data }, { status: 500 });
      }
    } catch (error) {
      return NextResponse.json({ error: 'Internal Server Error', details: error }, { status: 500 });
    }
  }
  
