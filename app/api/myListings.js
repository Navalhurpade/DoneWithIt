import http from "./httpsService";
const endpoint = "/my/listings";

const getMyListings = async () => {
  const responce = await http.get(endpoint);
  if (!responce.ok) console.log(responce.problem);
  return responce;
};

export { getMyListings };
