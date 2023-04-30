export async function GET(request: Request) {
    const isLocalhost = process.env.NODE_ENV === 'development';
    const baseUrl = isLocalhost ? 'http://localhost:7071' : 'https://ron-ai-image-generator-app.azurewebsites.net';
    const apiUrl = `${baseUrl}/api/getImages`;
    console.log(apiUrl);
    const response = await fetch(
      "https://ron-ai-image-generator-app.azurewebsites.net/api/getImages",
      {
        cache: "no-store",
      }
    );
  
    const blob = await response.blob();
    const textData = await blob.text();
  
    const data = JSON.parse(textData);

    
  
    return new Response(JSON.stringify(data), {
      status: 200,
    });
  }