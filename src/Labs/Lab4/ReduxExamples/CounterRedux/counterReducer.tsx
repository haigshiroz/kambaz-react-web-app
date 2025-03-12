import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0,
};

// Create the reducer
const counterSlice = createSlice({
    name: "counter",
    initialState,

    reducers: {
        increment: (state) => {
            state.count = state.count + 1;
        },
        decrement: (state) => {
            state.count = state.count - 1;
        },
    },
});

// Get the actions from the reducer
export const { increment, decrement } = counterSlice.actions;

// Get the actual reducer
export default counterSlice.reducer;