import { GET_GAMES, GAME_SEARCH, CLEAR_SEARCH } from "../types";

const initialState = {
  upcomingGames: [],
  popularGames: [],
  newGames: [],
  searchGames: [],
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
    case GAME_SEARCH:
      return {
        ...state,
        searchGames: action.payload,
      };
    case CLEAR_SEARCH:
      return {
        ...state,
        searchGames: [],
      };
    default:
      return state;
  }
};

export default gamesReducer;
