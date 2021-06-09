import http from "./httpsService";

const register = (expoPushToken) => {
  http.post("/expoPushTokens", { token: expoPushToken });
};

export default { register };
