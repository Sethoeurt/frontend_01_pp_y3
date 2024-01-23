import { createSlice } from "@reduxjs/toolkit";

const fillDetailsInitialState = {
    value: 1
}

const sliceFillDetails = createSlice({
    name: "fillDetails",
    initialState: fillDetailsInitialState,
    reducers: {
        nextComponents: (state, action) => {
            state.value += action.payload;
        },
        previousComponents: (state, action) => {
            state.value -= action.payload
        },
        firstComponents: (state) => {
            state.value = 1;
        },
        switchComponents: (state, action) => {
            state.value = action.payload + 1;
        }
    }
})

export const {
    nextComponents, previousComponents, firstComponents, switchComponents
} = sliceFillDetails.actions

export default sliceFillDetails.reducer