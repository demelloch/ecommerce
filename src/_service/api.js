import axios from "axios";

const api = axios.create({
  baseURL: "https://webapp353621.ip-45-79-142-173.cloudezapp.io/api",
  // baseURL: "localhost:5001/api",
  // https://webapp353621.ip-45-79-142-173.cloudezapp.io/api/productlistbyremark/home
});

export default api;
