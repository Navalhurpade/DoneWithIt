import jwtDecode from "jwt-decode";
import http from "./httpsService";
import storageManager from "./authStorage";

const apiEndpoint = "/auth";
const { getToken, removeToken, storeToken } = storageManager;

const authTokenKey = "auth-token";

const login = async (authDetails) => {
  return http.post(apiEndpoint, authDetails);
};

const logoutUser = () => {
  removeToken(authTokenKey);
  console.log("deleted token Logging out !");
};

const isUserLogedin = async () => {
  const token = await getToken(authTokenKey);
  if (token) {
    const userdata = jwtDecode(token);
    console.log("found user !", userdata);
    return userdata;
  }
  console.log("No user found !");
  return null;
};

const registerUser = async (userDetails) => {
  return http.post("/auth/register", userDetails);
};

export { registerUser, login, isUserLogedin, logoutUser, authTokenKey };
