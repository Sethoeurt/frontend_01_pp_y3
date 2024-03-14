import { configureStore } from "@reduxjs/toolkit";
import addressSlice from "./slices/addressSlice.js";
import bioSlice from './slices/bioSlice.js'
import educationSlice from './slices/educationSlice.js'
import experienceSlice from "./slices/experienceSlice.js";
import projectsSlice from "./slices/projectsSlice.js";
import keySkillsSlice from "./slices/keySkillsSlice.js";
import sliceDynamicStyle from "./slices/sliceDynamicStyle.js";
import sliceFillDetails from "./slices/sliceFillDetails.js";

export const store = configureStore({
    reducer: {
        address: addressSlice,
        bio : bioSlice,
        education : educationSlice,
        experience : experienceSlice,
        projects : projectsSlice,
        keySkills : keySkillsSlice,
        dynamicStyle : sliceDynamicStyle,
        fillDetails : sliceFillDetails,
    },
    devTools: true,
});