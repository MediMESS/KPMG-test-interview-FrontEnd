import { laravelHeaders, authHeaders } from "./util";
import { API_URL } from "./config";
import { getRequestOptions } from "./util";

const AUTH_URL = `${API_URL}/api/auth`;

const loginUser = (data) => {
  const requestOptions = {
    method: "post",
    headers: { ...laravelHeaders() },
    body: JSON.stringify(data),
  };

  return fetch(`${AUTH_URL}/login`, requestOptions).then((response) =>
    response.json()
  );
};

const logoutUser = (token) => {
  const requestOptions = {
    method: "get",
    headers: { ...laravelHeaders(), ...authHeaders(token) },
  };

  return fetch(`${AUTH_URL}/logout`, requestOptions).then((response) =>
    response.json()
  );
};

const signUpUser = (data) => {
  // "X-Requested-With": "XMLHttpRequest",
};

const accountService = {
  loginUser,
  logoutUser,
};
export default accountService;
