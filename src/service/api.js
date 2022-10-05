import axios from "axios";

// Set config defaults when creating the instance
export const instance = axios.create({
  baseURL: "http://localhost:5001/v1/",
});

export const AUTH_TOKEN = localStorage.getItem("token");
const user = localStorage.getItem("user");
export const USER_TOKEN = user ? JSON.parse(user) : {};

// Alter defaults after instance has been created
instance.defaults.headers.common.Authorization = AUTH_TOKEN || "";
