import { GET_DETAIL, USERS_ERROR } from "../types";
import axios from "axios";

import { gameDetailURL, gameScreenshotURL } from "../../api";

export const getGameDetail = (id) => async (dispatch) => {
  try {
    const gameDetial = await axios.get(gameDetailURL(id));
    const gameScreenshots = await axios.get(gameScreenshotURL(id));

    const gameInfo = {
      gameDetail: gameDetial.data,
      gameScreenshots: gameScreenshots.data,
    };

    dispatch({
      type: GET_DETAIL,

      payload: gameInfo,
    });
  } catch (error) {
    dispatch({
      type: USERS_ERROR,
      payload: error,
    });
  }
};
