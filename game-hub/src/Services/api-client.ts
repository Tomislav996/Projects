import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api/",
  params: {
    key: "800064f9dc2f4713a3e4889156a932b7",
  },
});
