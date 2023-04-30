import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const res = await request.json(); // res now contains body
  const prompt = res.prompt;

  const isLocalhost = process.env.NODE_ENV === 'development';
  const baseUrl = isLocalhost ? 'http://localhost:7071' : 'https://ron-ai-image-generator-app.azurewebsites.net';
  const apiUrl = `${baseUrl}/api/generateImage`;

  console.log(apiUrl);
  const response = await fetch(
    "https://ron-ai-image-generator-app.azurewebsites.net/api/generateImage",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt }),
    }
  );

  const textData = await response.text();

  return NextResponse.json(textData);
}