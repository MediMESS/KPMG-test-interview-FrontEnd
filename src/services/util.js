export const getWilayas = async () => {
  const response = await fetch("/assets/wilayas-fr.json");
  return response.json();
};

export const getCommunesByWilayaId = async (wilaya) => {
  const wilaya_id = wilaya.split("-")[0];
  const reponse = await fetch("/assets/communes-wilayas-fr.json");
  const communes = await reponse.json();
  return communes.filter((c) => c.wilaya_id === wilaya_id);
};

export const laravelHeaders = () => {
  return {
    Accept: "application/json",
    "Content-Type": "application/json",
  };
};

export const getRequestOptions = (method, headers, body = undefined) => {
  const requestOptions = {
    method,
    headers: { ...headers },
  };
  if (body) requestOptions.body = body;
  return requestOptions;
};

export const handleResponse = (url, requestOptions) => {
  return fetch(url, requestOptions)
    .then((response) => response.json())
    .then((data) => data);
};

export const authHeaders = (token) => {
  return {
    Authorization: `Bearer ${token}`,
  };
};
