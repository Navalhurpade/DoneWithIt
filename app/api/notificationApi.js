import http from "./httpsService";

const sendMessage = (message) => {
  return http.post("/messages", message);
};

export default sendMessage;
