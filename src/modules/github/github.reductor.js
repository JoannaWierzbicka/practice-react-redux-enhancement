import types from "./github.types";

const initState = {
  data: [],
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case types.SHOW_REPOS:
      return {
        ...state,
        data: action.payload.data,
      };

    default:
      return state;
  }
};

export default reducer;
