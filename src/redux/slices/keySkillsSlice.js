import { createSlice } from "@reduxjs/toolkit";

const keySkillsInitialState = ['','',''];

const keySkillsSlice = createSlice({
    name : 'keySkills',
    initialState : keySkillsInitialState,
    reducers : {
        setKeySkills : (state, action) => {
            state.length = 0;
            state.push(...action.payload);
        },
    }
})

export const {setKeySkills} = keySkillsSlice.actions;
// actions = input file 

export default keySkillsSlice.reducer; 
// reducer = store.js 