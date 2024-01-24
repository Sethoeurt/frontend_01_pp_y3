import { createSlice } from "@reduxjs/toolkit";

const addressInitialState = {
  postal_code: "",
  city: "",
  state: "",
  country: "",
  phone: "",
  email: ""
}

const addressSlice = createSlice({
  name: "address",
  initialState: addressInitialState,
  reducers: {
    modifyAddress: (state, action) => {
      return { ...state, ...action.payload };
    }
  }
});


export const { modifyAddress } = addressSlice.actions;
export default addressSlice.reducer;

// 01. return action.payload;
// 02. return { ...state, ...action.payload };
// both are doing the same task, learn the difference


// 01. return action.payload;
// Overwrites the entire state with the action payload, potentially discarding other state data.

// 02. return { ...state, ...action.payload };
// Retains existing state and merges in updates from the action payload, preserving non-modified fields.