import { combineReducers } from "redux";
import gameDetailReducer from "./gameDetailReducer";
import gamesReducer from "./gamesReducer";

export default combineReducers({
  gamesList: gamesReducer,
  gameInfo: gameDetailReducer,
});
