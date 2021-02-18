import { laravelHeaders, authHeaders } from "./util";
import { API_URL } from "./config";

const AUTH_URL = `${API_URL}/api/auth`;

const loginUser = (data) => {
  const requestOptions = {
    method: "post",
    headers: { ...laravelHeaders() },
    body: JSON.stringify(data),
  };

  console.log(requestOptions);
  return fetch(`${AUTH_URL}/login`, requestOptions).then((response) =>
    response.json()
  );
};

const addUser = (data) => {
  const { token, ...body } = data;
  const requestOptions = {
    method: "post",
    headers: { ...laravelHeaders(), ...authHeaders(token) },
    body: JSON.stringify(body),
  };

  console.log(requestOptions);
  return fetch(`${AUTH_URL}/addUser`, requestOptions).then((response) =>
    response.json()
  );
};

const signUpUser = (data) => {
  // "X-Requested-With": "XMLHttpRequest",
};
const accountService = {
  loginUser,
  addUser,
};
export default accountService;
