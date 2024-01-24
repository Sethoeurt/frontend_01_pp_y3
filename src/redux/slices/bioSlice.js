import { createSlice } from "@reduxjs/toolkit";

const bioInitailState = {
    profileImage: "anuragaffection",
    firstName: "",
    lastName: "",
    role: "",
    description: "",
}

const bioSlice = createSlice({
    name: "bio",
    initialState: bioInitailState,
    reducers: {
        modifyBio: (state, action) => {
            return { ...state, ...action.payload }
        }
    }
})

export const { modifyBio } = bioSlice.actions

export default bioSlice.reducer;