const RANDOM_QUOTE_API_URL = 'http://api.quotable.io/random';

export default async function getNextQuote() {
    try {
        let quote = fetch(RANDOM_QUOTE_API_URL)
            .then(response => response.json())
            .then(data => data.content)
        return quote;
    } catch (err) {
        console.log(err);
        return '';
    }
 }