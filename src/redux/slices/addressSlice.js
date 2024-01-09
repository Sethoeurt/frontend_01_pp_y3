import { createSlice } from "@reduxjs/toolkit";

const addressInitialState = {
  postal_code: "",
  city: "",
  state: "",
  country: "",
  phone: "",
  email: ""
};

const addressSlice = createSlice({
  name: "address",
  initialState: addressInitialState,
  reducers: {
    setPostalcode: (state, action) => {
      state.postal_code = action.payload;
    },
    setCity: (state, action) => {
      state.city = action.payload;
    },
    setState: (state, action) => {
      state.state = action.payload;
    },
    setCountry: (state, action) => {
      state.country = action.payload;
    },
    setPhone: (state, action) => {
      state.phone = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    }
  }
});


export const {
  setPostalcode,
  setCity,
  setState,
  setCountry,
  setPhone,
  setEmail
} = addressSlice.actions;


export default addressSlice.reducer;
