import { configureStore } from "@reduxjs/toolkit";
import formSlice from "./slice";
const store= configureStore({
    reducer:{
        form:formSlice,
    }
});
export default store;
//This module exports the Redux Store