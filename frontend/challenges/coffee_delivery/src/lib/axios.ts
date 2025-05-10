import axios from "axios";

export const mainUrl = axios.create({
  baseURL: "http://192.168.15.59:3001",
});

export const cepUrl = axios.create({
  baseURL: "https://viacep.com.br/ws",
});
