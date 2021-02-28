import { laravelHeaders, authHeaders } from "./util";
import { API_URL } from "./config";
import { getRequestOptions, handleResponse } from "./util";

const CUSTOMERS_URL = `${API_URL}/api/customers`;

const addCustomer = (data) => {
  const { token, ...body } = data;
  const requestOptions = {
    method: "post",
    headers: { ...laravelHeaders(), ...authHeaders(token) },
    body: JSON.stringify(body),
  };

  console.log(requestOptions);
  return fetch(`${CUSTOMERS_URL}/new`, requestOptions).then((response) =>
    response.json()
  );
};

const getCustomers = (options) => {
  const requestOptions = getRequestOptions("get", {
    ...laravelHeaders(),
    ...authHeaders(options.token),
  });
  return handleResponse(
    `${CUSTOMERS_URL}?pagination_limit=${options.pagination_limit}`,
    requestOptions
  );
};

const getCustomersPagination = (options) => {
  const requestOptions = getRequestOptions("get", {
    ...laravelHeaders(),
    ...authHeaders(options.token),
  });
  return handleResponse(
    `${CUSTOMERS_URL}?pagination_limit=${options.pagination_limit}&page=${options.page}`,
    requestOptions
  );
};

const signUpCustomer = (data) => {
  // "X-Requested-With": "XMLHttpRequest",
};

const customerServices = {
  addCustomer,
  getCustomers,
  getCustomersPagination,
};
export default customerServices;
