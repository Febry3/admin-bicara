import axios from "axios";

export const apiUrl = "http://127.0.0.1:8000/api/v1/";

const axiosClient = axios.create({
    baseURL: apiUrl,
});


export default axiosClient;