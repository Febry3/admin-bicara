import axios from "axios";

export const apiUrl = "http://127.0.0.1:8000/api/v1/";
export const url = "http://127.0.0.1:8000";

const axiosClient = axios.create({
    baseURL: apiUrl,
});

axiosClient.defaults.withCredentials = true;
export default axiosClient;