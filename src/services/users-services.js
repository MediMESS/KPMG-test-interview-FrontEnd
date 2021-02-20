import { laravelHeaders, authHeaders } from "./util";
import { API_URL } from "./config";
import { getRequestOptions, handleResponse } from "./util";

const USERS_URL = `${API_URL}/api/users`;

const addUser = (data) => {
  const { token, ...body } = data;
  const requestOptions = {
    method: "post",
    headers: { ...laravelHeaders(), ...authHeaders(token) },
    body: JSON.stringify(body),
  };

  console.log(requestOptions);
  return fetch(`${USERS_URL}/new`, requestOptions).then((response) =>
    response.json()
  );
};

const getUsers = (options) => {
  const requestOptions = getRequestOptions("get", {
    ...laravelHeaders(),
    ...authHeaders(options.token),
  });
  return handleResponse(
    `${USERS_URL}?pagination_limit=${options.pagination_limit}`,
    requestOptions
  );
};

const getUsersPagination = (options) => {
  const requestOptions = getRequestOptions("get", {
    ...laravelHeaders(),
    ...authHeaders(options.token),
  });
  return handleResponse(
    `${USERS_URL}?pagination_limit=${options.pagination_limit}&page=${options.page}`,
    requestOptions
  );
};
const signUpUser = (data) => {
  // "X-Requested-With": "XMLHttpRequest",
};
const usersServices = {
  addUser,
  getUsers,
  getUsersPagination,
};
export default usersServices;
