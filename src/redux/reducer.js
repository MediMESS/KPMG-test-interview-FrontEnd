import * as actions from "./actions";

const initialState = {
  user: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null,
  token: localStorage.getItem("token")
    ? JSON.parse(localStorage.getItem("token"))
    : null,
  is_connecte: localStorage.getItem("token") ? true : false,
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.LOGIN:
      return {
        ...state,
        user: action.user,
        token: action.token,
        is_connecte: true,
      };
    default:
      return state;
  }
};
export default Reducer;
