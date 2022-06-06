import { combineReducers } from "redux";
import auth from "./auth";
import message from "./message";
import cars from "./cars";

export default combineReducers({
    auth,
    message,
    cars,
});