import { create } from "apisauce";

// const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MDRkZDc0ZDM4NWYyMjQwNjg1MjVjYzYiLCJ1c2VySW1hZ2UiOiJodHRwczovL2ltZy5pY29uczguY29tL2NvbG9yLzk2LzAwMDAwMC9nZW5kZXItbmV1dHJhbC11c2VyLnBuZyIsIm5hbWUiOiJuYXZhbEh1cnBhZGUiLCJlbWFpbCI6Im5hdmFsQGdtYWlsLmNvbSIsImlhdCI6MTYxNTgwOTQ1N30.eiqXESyHFRIQQjdiMPXbNItwopFORLwsUFwGrkqCB9I"

// axios.defaults.baseURL = "http://192.168.2.228:9000"
// axios.defaults.baseURL = "localhost:9000"
// axios.defaults.headers = { "x-auth-token" : token }

const api = create({
  baseURL: "http://192.168.2.228:9000",
});

export default {
  get: api.get,
  post: api.post,
};
