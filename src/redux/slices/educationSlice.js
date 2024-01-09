import { createSlice } from "@reduxjs/toolkit";

const educationInitialState = {
    degree: "",
    domain: "",
    university: "",
    start_year: "",
    end_year: "",
}

const educationSlice = createSlice({
    name: "education",
    initialState: educationInitialState,
    reducers : {
        setDegree : (state, action) => {
            state.degree = action.payload;
        },
        setDomain : (state, action) => {
            state.domain = action.payload;
        },
        setUniversity : (state, action) => {
            state.university = action.payload;
        },
        setStartYear : (state, action) => {
            state.start_year = action.payload;
        },
        setEndYear : (state, action) => {
            state.end_year = action.payload;
        }
    }
})


export const {
    setDegree,setDomain, setUniversity, setStartYear, setEndYear
} = educationSlice.actions


export default educationSlice.reducer;