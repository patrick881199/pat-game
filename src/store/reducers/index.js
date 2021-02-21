import { combineReducers } from "redux";
import userReducer from "./usersReducer";
import gamesReducer from "./gamesReducer";

export default combineReducers({
  gamesList: gamesReducer,
});
