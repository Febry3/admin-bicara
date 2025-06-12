import axios from "axios";

export const apiUrl = "https://temanbicara.web.id/api/v1/";
export const url = "https://temanbicara.web.id";

const axiosClient = axios.create({
    baseURL: apiUrl,
    withCredentials: false,
});

export default axiosClient;