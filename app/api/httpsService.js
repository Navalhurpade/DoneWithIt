import { create } from "apisauce";
import authStorage from "./auth/authStorage";
import cacheStorage from "./../cache/cache";
import settings from "./../config/setting";

const api = create({
  baseURL: settings.apiUrl,
  // baseURL: "https://done-with-it-backend-naval.herokuapp.com/api",
});

const get = api.get;

api.get = async (url, params, axiosConfig) => {
  const responce = await get(url, params, axiosConfig);

  if (responce.ok) {
    cacheStorage.store(url, responce.data);
    return responce;
  } else {
    const cachedListings = await cacheStorage.get(url);
    return { ok: true, data: cachedListings, status: 200 };
  }
};

api.addAsyncRequestTransform(async (req) => {
  const authToken = await authStorage.getToken();

  req.headers["x-auth-token"] = authToken;
});

export default api;
