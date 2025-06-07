import axios from "axios";

export const apiUrl = "https://temanbicara.web.id/api/v1/";

const axiosClient = axios.create({
    baseURL: apiUrl,
});


export default axiosClient;