import axios from "axios";

import { gameSearchURL } from "../../api";
import { GAME_SEARCH, USERS_ERROR } from "../types";
export const gameSearch = (name) => async (dispatch) => {
  try {
    const searchGames = await axios.get(gameSearchURL(name));

    dispatch({
      type: GAME_SEARCH,

      payload: searchGames.data.results,
    });
  } catch (error) {
    dispatch({
      type: USERS_ERROR,
      payload: error,
    });
  }
};
