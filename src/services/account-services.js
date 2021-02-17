import { laravelHeaders, authHeaders } from "./util";
import { API_URL } from "./config";

const AUTH_URL =
  process.env.NODE_ENV == "production"
    ? process.env.SERVER_URL
    : `${API_URL}/api/auth`;

const loginUser = (data) => {
  console.log(AUTH_URL);
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

const signUpUser = (data) => {
  // "X-Requested-With": "XMLHttpRequest",
};
const accountService = {
  loginUser,
};
export default accountService;
