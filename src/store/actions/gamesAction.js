import { GET_GAMES, USERS_ERROR } from "../types";
import axios from "axios";

import { upcomgingGameURL, popularGameURL, newGameURL } from "../../api";

export const getGames = () => async (dispatch) => {
  try {
    console.log(newGameURL);
    const upcomingGames = await axios.get(upcomgingGameURL);
    const popularGames = await axios.get(popularGameURL);
    const newGames = await axios.get(newGameURL);

    const returnedData = {
      upcomingGames: upcomingGames.data.results,
      popularGames: popularGames.data.results,
      newGames: newGames.data.results,
    };

    dispatch({
      type: GET_GAMES,

      payload: returnedData,
    });
  } catch (error) {
    dispatch({
      type: USERS_ERROR,
      payload: error,
    });
  }
};
