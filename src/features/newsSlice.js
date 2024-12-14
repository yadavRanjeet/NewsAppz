import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchNews } from '../services/newsAPI';

export const fetchNewsAsync = createAsyncThunk('news/fetchNews', async () => {
    return await fetchNews({});
});

const newsSlice = createSlice({
    name: 'news',
    initialState: { articles: [], loading: false },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchNewsAsync.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchNewsAsync.fulfilled, (state, action) => {
                state.articles = action.payload;
                state.loading = false;
            })
            .addCase(fetchNewsAsync.rejected, (state) => {
                state.loading = false;
            });
    },
});

export default newsSlice.reducer;
