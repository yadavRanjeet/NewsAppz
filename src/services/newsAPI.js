import axios from 'axios';

// Base URL for the API
const BASE_URL = 'https://saurav.tech/NewsAPI/top-headlines/category';

/**
 * Fetch news based on category and country code
 * @param {string} category - News category (e.g., 'health', 'sports')
 * @param {string} countryCode - Country code (e.g., 'us', 'in')
 * @returns {Promise<Array>} - Array of articles
 */
export const fetchNews = async (category = 'health', countryCode = 'in') => {
    try {
        const response = await axios.get(`${BASE_URL}/${category}/${countryCode}.json`);
        return response.data.articles; 
    } catch (error) {
        console.error('Error fetching news:', error);
        throw error; 
    }
};
