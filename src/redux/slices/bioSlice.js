import { createSlice } from "@reduxjs/toolkit";

const bioInitailState = {
    profile_image: "",
    first_name: "",
    last_name: "",
    role: "",
    description: "",
}

const bioSlice = createSlice({
    name: "bio",
    initialState: bioInitailState,
    reducers: {
        setProfileImage: (state, action) => {
            state.profile_image = action.payload;
        },
        setFirstName: (state, action) => {
            state.first_name = action.payload;
        },
        setLastName: (state, action) => {
            state.last_name = action.payload;
        },
        setRole: (state, action) => {
            state.role = action.payload;
        },
        setDescription: (state, action) => {
            state.description = action.payload;
        }
    }
})

export const {
    setProfileImage, setFirstName, setLastName, setRole, setDescription
} = bioSlice.actions

export default bioSlice.reducer;