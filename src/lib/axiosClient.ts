import axios from "axios";

export const apiUrl = "http://localhost:8000/api/v1/";
export const url = "http://localhost:8000";

const axiosClient = axios.create({
    baseURL: apiUrl,
    withCredentials: true,
});

export default axiosClient;