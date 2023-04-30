import axios from 'axios';
import { Console } from 'console';

const fetchSuggestionFromChatGPT = async () => {
  try {
    console.log("Getting a new suggestion")
    const response = await axios.get('/api/suggestion', {
      headers: {
        'Cache-Control': 'no-store',
      },
    });

    console.log(`Suggestion is ${response.data}`);

    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default fetchSuggestionFromChatGPT;
