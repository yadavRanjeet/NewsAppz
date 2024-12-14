import { configureStore } from '@reduxjs/toolkit';
import authSlice from './features/authSlice';
import newsSlice from './features/newsSlice';
import payoutSlice from './features/payoutSlice';

export const store = configureStore({
    reducer: {
        auth: authSlice,
        news: newsSlice,
        payout: payoutSlice,
    },
});
