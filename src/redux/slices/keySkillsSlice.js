import { createSlice } from "@reduxjs/toolkit";

const keySkillsInitialState = {
    firstKey : "",
    secondKey : "",
}


const keySkillsSlice = createSlice({
    name : 'keySkills',
    initialState : keySkillsInitialState,
    reducers : {
        setFirstKey : (state, action) => {
            state.firstKey = action.payload;
        },
        setSecondKey : (state, action) => {
            state.secondKey = action.payload;
        }
    }
})

export const {setFirstKey, setSecondKey} = keySkillsSlice.actions;
// actions = input file 

export default keySkillsSlice.reducer; 
// reducer = store.js 