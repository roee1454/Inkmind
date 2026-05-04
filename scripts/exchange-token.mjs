// scripts/exchange-token.mjs
import axios from 'axios';
import fs from 'fs';
import path from 'path';

// Helper to read .env file
const envPath = path.resolve(process.cwd(), '.env');
const envContent = fs.readFileSync(envPath, 'utf8');

const getEnvVar = (name) => {
  const match = envContent.match(new RegExp(`${name}="(.*)"`)) || envContent.match(new RegExp(`${name}=(.*)`));
  return match ? match[1] : null;
};

const shortLivedToken = getEnvVar('INSTAGRAM_ACCESS_TOKEN');
// You can either add this to .env or pass as an argument
const clientSecret = process.argv[2] || getEnvVar('INSTAGRAM_APP_SECRET');

if (!shortLivedToken) {
  console.error('❌ Error: INSTAGRAM_ACCESS_TOKEN not found in .env');
  process.exit(1);
}

if (!clientSecret) {
  console.error('❌ Error: Missing App Secret.');
  console.log('Usage: node scripts/exchange-token.mjs <YOUR_APP_SECRET>');
  console.log('Or add INSTAGRAM_APP_SECRET="your_secret" to your .env');
  process.exit(1);
}


console.log('⏳ Exchanging token...');

async function exchangeToken() {
  try {
    console.log('⏳ Attempting to exchange for a long-lived token...');
    const response = await axios.get('https://graph.instagram.com/access_token', {
      params: {
        grant_type: 'ig_exchange_token',
        client_secret: clientSecret,
        access_token: shortLivedToken
      }
    });

    handleSuccess(response.data, 'Exchanged');
    
  } catch (error) {
    const errorData = error.response?.data?.error || error.response?.data || error.message;
    
    // If exchange fails, it might already be a long-lived token. Let's try to REFRESH it.
    if (errorData.code === 452 || errorData.message?.includes('Session key invalid')) {
      console.log('ℹ️  Exchange failed. The token might already be long-lived. Attempting to REFRESH instead...');
      try {
        const refreshResponse = await axios.get('https://graph.instagram.com/refresh_access_token', {
          params: {
            grant_type: 'ig_refresh_token',
            access_token: shortLivedToken
          }
        });
        handleSuccess(refreshResponse.data, 'Refreshed');
        return;
      } catch (refreshError) {
        console.error('\n❌ Both Exchange and Refresh failed.');
        console.error(JSON.stringify(refreshError.response?.data || refreshError.message, null, 2));
      }
    } else {
      console.error('\n❌ Failed to exchange token:');
      console.error(JSON.stringify(errorData, null, 2));
    }
  }
}

function handleSuccess(data, method) {
  const { access_token, expires_in } = data;
  const days = Math.floor(expires_in / (60 * 60 * 24));

  console.log(`\n✅ Success! Token ${method} successfully.`);
  console.log(`Expires in: ${days} days`);

  // Automatically update .env file
  const updatedEnvContent = envContent.replace(
    /INSTAGRAM_ACCESS_TOKEN=".*"/,
    `INSTAGRAM_ACCESS_TOKEN="${access_token}"`
  );

  fs.writeFileSync(envPath, updatedEnvContent);

  console.log('\n🚀 Your .env file has been updated automatically!');
  console.log('You are all set for the next 60 days.');
}



exchangeToken();
