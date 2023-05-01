const fetchImages = async () => {
  try {
    const isLocalhost = process.env.NODE_ENV === 'development';
    const baseUrl = isLocalhost ? 'http://localhost:7071' : 'https://ron-ai-image-generator-app.azurewebsites.net';
    const apiUrl = `${baseUrl}/api/getImages`;

    const response = await fetch("https://ron-ai-image-generator-app.azurewebsites.net/api/getImages", {
      cache: 'no-store',
    });

    console.log("FetchImage Response: " + response);

    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default fetchImages;
