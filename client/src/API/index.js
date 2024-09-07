import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:3000" });
API.interceptors.request.use((req) => {
  if (localStorage.getItem("authToken")) {
    req.headers.authorization = `Bearer ${
      localStorage.getItem("authToken")
    }`;
  }

  return req;
});

export const signIn = (formData) => API.post("/user/signin", formData);
export const signUp = (formData) => API.post("/user/signup", formData);
export const createTask = (formData) => API.post("/task/create", formData);