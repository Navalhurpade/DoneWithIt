import buildFormData from "../utils/buildFormData";
import http from "./httpsService";
const endpoint = "/listings";

const getListings = async () => {
  const responce = await http.get(endpoint);
  if (!responce.ok) console.log(responce.problem);
  return responce;
};

const postListings = (listing, setUploadProgress) => {
  const data = buildFormData(listing);

  return http.post(endpoint, data, {
    onUploadProgress: (progress) =>
      setUploadProgress(progress.loaded / progress.total),
  });
};

export { getListings, postListings };
