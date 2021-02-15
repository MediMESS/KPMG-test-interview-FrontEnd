import * as actions from "./actions";

const initialState = {
  user: null,
  token: null,
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.LOGIN:
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};
export default Reducer;
