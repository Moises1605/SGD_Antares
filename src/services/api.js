import axios from "axios";
import { getToken } from "./auth";

//const api = axios.create({baseURL:' https://sgd-api.herokuapp.com'});
const api = axios.create({ baseURL: "http://localhost:9000" });

api.interceptors.request.use(async config => {
    const token = getToken();
    if (token){
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

//const api = axios.create({baseURL: process.env.REACT_APP_API_URL});
export default api;
