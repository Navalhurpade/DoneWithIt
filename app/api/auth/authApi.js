import http from "../httpsService";
import authStorage from "./authStorage";
import jwtDecode from "jwt-decode";

const apiEndpoint = "/auth";
const authTokenKey = authStorage.authTokenKey;

const login = (authDetails) => {
  return http.post(apiEndpoint, authDetails);
};

const registerUser = (userDetails) => {
  return http.post("/users", userDetails);
};

const isUserLogedin = async () => {
  const token = await authStorage.getToken(authTokenKey);
  return token ? jwtDecode(token) : null;
};

export { registerUser, login, authTokenKey, isUserLogedin };
