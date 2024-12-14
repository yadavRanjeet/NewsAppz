import axios from 'axios';

export const fetchNews = async (filters) => {
    const response = await axios.get('https://newsapi.org/v2/everything', {
        params: { ...filters, apiKey: 'YOUR_API_KEY' },
    });
    return response.data.articles;
};
