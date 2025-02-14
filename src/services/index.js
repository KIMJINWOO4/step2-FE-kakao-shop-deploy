import axios from "axios";
import { checkStatus } from "../utils/statuscatch";
import { getCookie } from "../store/cookies";

const staticServerUrl = process.env.REACT_APP_PATH || "";
export const instance = axios.create({
  baseURL: staticServerUrl + "/api",
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use((config) => {
  const token = getCookie("token");
  if (token) instance.defaults.headers.common["Authorization"] = token;
  /*if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }*/
  return config;
});

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      console.log(error.response);
      checkStatus(error.response);
    }
    return Promise.reject(error);
  }
);
