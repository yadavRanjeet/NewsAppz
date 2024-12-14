import { createSlice } from '@reduxjs/toolkit';

const payoutSlice = createSlice({
    name: 'payout',
    initialState: {
        payouts: [],
    },
    reducers: {
        addPayout(state, action) {
            state.payouts.push(action.payload);
        },
        updatePayout(state, action) {
            const index = state.payouts.findIndex((p) => p.id === action.payload.id);
            if (index !== -1) state.payouts[index] = action.payload;
        },
    },
});

export const { addPayout, updatePayout } = payoutSlice.actions;
export default payoutSlice.reducer;
