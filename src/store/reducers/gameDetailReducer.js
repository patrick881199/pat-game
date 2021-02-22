import { GET_DETAIL } from "../types";

const initialState = {
  returned: false,
};

const gameDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DETAIL:
      return {
        returned: true,
        ...action.payload,
      };

    default:
      return state;
  }
};

export default gameDetailReducer;
