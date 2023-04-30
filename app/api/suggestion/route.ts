"use server";
export async function GET(request: Request) {
  const isLocalhost = process.env.NODE_ENV === 'development';
  const baseUrl = isLocalhost ? 'http://localhost:7071' : 'https://ron-ai-image-generator-app.azurewebsites.net';
  const apiUrl = `${baseUrl}/api/getChatGPTSuggestion?timestamp=${new Date().getTime()}`;
  console.log(apiUrl);

  const response = await fetch(apiUrl, {
    cache: 'no-store'
  });

  const textData = await response.text();
  console.log(textData);

  return new Response(JSON.stringify(textData.trim()), {
    status: 200,
    headers: {
      'Cache-Control': 'no-store, no-cache, must-revalidate',
      'Expires': '0',
    },
  });
}
