import axios from "axios";
axios.defaults.baseURL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:5400/api/v1/"
    : "https://pace-tailor-backend-a8ppn3c33-imtiaz-techs-projects.vercel.app/api/v1/";

export default axios;
