import { GET_GAMES } from "../types";

const initialState = {
  upcomingGames: [],
  popularGames: [],
  newGames: [],
};

const gamesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GAMES:
      return {
        ...state,
        upcomingGames: action.payload.upcomingGames,
        popularGames: action.payload.popularGames,
        newGames: action.payload.newGames,
      };

    default:
      return state;
  }
};

export default gamesReducer;
