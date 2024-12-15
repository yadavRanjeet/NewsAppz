import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchNews } from '../services/newsAPI';


export const fetchNewsAsync = createAsyncThunk(
    'news/fetchNews',
    async ({ category, countryCode }) => {
        return await fetchNews(category, countryCode);
    }
);

const newsSlice = createSlice({
    name: 'news',
    initialState: {
        articles: [], 
        loading: false,
        error: null, 
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchNewsAsync.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchNewsAsync.fulfilled, (state, action) => {
                state.loading = false;
                state.articles = action.payload; 
            })
            .addCase(fetchNewsAsync.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message; 
            });
    },
});

export default newsSlice.reducer;
