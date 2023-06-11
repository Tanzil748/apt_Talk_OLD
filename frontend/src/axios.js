import axios from "axios";

export const apiRequests = axios.create({
  baseURL: "http://localhost:4500",
  withCredentials: true,
});
