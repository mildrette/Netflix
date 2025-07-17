// src/api.js
import axios from "axios";

export const imdb = axios.create({
  baseURL: "https://search.imdbot.workers.dev/",
});
