import http from "./httpsService";
const endpoint = "/categories";

export const getCategories = async () => {
  const responce = await http.get(endpoint);
  if (!responce.ok) console.log(responce.problem);
  return responce;
};
