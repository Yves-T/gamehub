import axios from "axios";

export default axios.create({
  baseURL: "https://rawg.io/api",
  params: { key: import.meta.env.VITE_API_KEY },
});
