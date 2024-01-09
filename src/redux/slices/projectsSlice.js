import { createSlice } from "@reduxjs/toolkit";

const projectsInitialState = {
    project_name: "",
    tech_stack: "",
    github_link: "",
    live_link: "",
    description: ""
}
const projectsSlice = createSlice({
    name: "projects",
    initialState: projectsInitialState,
    reducers: {
        setProjectName: (state, action) => {
            state.project_name = action.payload;
        },
        setTechStack: (state, action) => {
            state.tech_stack = action.payload;
        },
        setGithubLink: (state, action) => {
            state.github_link = action.payload;
        },
        setLiveLink: (state, action) => {
            state.live_link = action.payload;
        },
        setDescription: (state, action) => {
            state.description = action.payload;
        }
    }
})

export const {
    setProjectName, setTechStack, setGithubLink, setLiveLink, setDescription
} = projectsSlice.actions;

export default projectsSlice.reducer;