import axios from "axios";

export const mainUrl = axios.create({
  baseURL: "http://localhost:3001",
});

export const cepUrl = axios.create({
  baseURL: "https://viacep.com.br/ws",
});
