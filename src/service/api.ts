import axios from "axios";

const api = axios.create({
  baseURL: "https://workspace--server.herokuapp.com",
});

export default api;
