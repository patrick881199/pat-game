import { GET_DETAIL, SET_RETURNED_FALSE } from "../types";

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
    case SET_RETURNED_FALSE:
      return {
        ...state,
        returned: false,
      };

    default:
      return state;
  }
};

export default gameDetailReducer;
