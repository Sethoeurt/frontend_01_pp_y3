import { createSlice } from "@reduxjs/toolkit";

const experienceInitialState = {
    job_title: "",
    organization_name: "",
    start_year: "",
    end_year: "",
}

const experienceSlice = createSlice({
    name: "experience",
    initialState: experienceInitialState,
    reducers: {
        setJobTitle: (state, action) => {
            state.job_title = action.payload;
        },
        setOrganizationName: (state, action) => {
            state.organization_name = action.payload;
        },
        setStartYear: (state, action) => {
            state.start_year = action.payload;
        },
        setEndYear: (state, action) => {
            state.end_year = action.payload;
        }
    }
})

export const {
    setJobTitle,setOrganizationName, setStartYear, setEndYear
} = experienceSlice.actions;


export default experienceSlice.reducer;