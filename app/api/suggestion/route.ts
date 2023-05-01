export const fetchSuggestionFromChatGPT = async () => {
  try {
    const isLocalhost = process.env.NODE_ENV === 'development';
    const baseUrl = isLocalhost ? 'http://localhost:7071' : 'https://ron-ai-image-generator-app.azurewebsites.net';
    const apiUrl = `${baseUrl}/api/getChatGPTSuggestion?timestamp=${new Date().getTime()}`;
    console.log(apiUrl);

    const response = await fetch(apiUrl, {
      cache: 'no-store'
    });

    const textData = await response.text();
    console.log(textData);

    return JSON.parse(textData.trim());
  } catch (error) {
    console.error(error);
    return null;
  }
};
