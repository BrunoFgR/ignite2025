import axios from "axios";

export const baseURL = axios.create({
  baseURL: "http://192.168.15.59:3001",
});
