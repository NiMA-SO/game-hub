import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "9caa68c8b51e4d1297b0dae8845e356f",
  },
});
