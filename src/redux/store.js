import { configureStore } from "@reduxjs/toolkit";
import addressSlice from "./slices/addressSlice.js";
import bioSlice from './slices/bioSlice.js'
import educationSlice from './slices/educationSlice.js'
import experienceSlice from "./slices/experienceSlice.js";


export const store = configureStore({
    reducer: {
        address: addressSlice,
        bio : bioSlice,
        education : educationSlice,
        experience : experienceSlice,
    },
    devTools: true,
});