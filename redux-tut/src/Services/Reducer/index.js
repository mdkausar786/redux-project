import { combineReducers } from "redux"; //to combine reducers in root_reduxers(index.js=root r)
import cartItems from "./reducer";

export default combineReducers( {
    cartItems,// add all reducer in this fun.
});