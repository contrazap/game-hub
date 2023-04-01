import axios, { CanceledError } from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "6ff0aad2d58a424d8ed5f848e31e5c42",
  },
});

export { CanceledError };
