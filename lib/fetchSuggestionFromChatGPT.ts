console.log("getting suggestion");
const fetchSuggestionFromChatGPT = () =>
    fetch("/api/suggestion", {
        cache: 'no-store'
    }).then( (res) => res.json());

    console.log("got suggestion");

export default fetchSuggestionFromChatGPT;