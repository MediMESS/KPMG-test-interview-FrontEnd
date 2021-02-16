export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

const actionLogin = (params) => {
  return { type: LOGIN, user: params.user, token: params.token };
};
export const rememberMeLogin = (params) => {
  localStorage.setItem("token", JSON.stringify(params.token));
  localStorage.setItem("user", JSON.stringify(params.user));
  return actionLogin(params);
};

export const simpleLogin = (params) => {
  return actionLogin(params);
};

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  return { type: LOGOUT };
};
