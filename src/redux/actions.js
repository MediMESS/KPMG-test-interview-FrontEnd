export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

export const login = () => {
  localStorage.setItem("token");
  localStorage.setItem("user");
  return { type: LOGIN };
};

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  return { type: LOGOUT };
};
