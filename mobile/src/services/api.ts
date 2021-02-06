import axios from "axios";

const api = axios.create({
  baseURL: "http:////2g-rir.anonymous.mobile.exp.direct:3333",
});

export default api;
