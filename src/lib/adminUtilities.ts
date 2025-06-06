import { AxiosResponse } from "axios";
import axiosClient from "./axiosClient";
import { UserAttribute } from "@/types/app-type";

class AdminUtilities {
    public async createAdmin(formData: FormData): Promise<AxiosResponse> {
        try {
            const response = await axiosClient.post("/admin/account?role=admin", formData);
            return response.data;
        } catch (err: any) {
            console.error(err);
            return err.response as AxiosResponse;
        }
    }

    public async getAllAdmin(): Promise<UserAttribute[]> {
        try {
            const response = await axiosClient.get("/admin/account/admin");
            console.log(response.data.data)
            return response.data.data;
        } catch (err: any) {
            console.error(err);
            return [];
        }
    }
}

export default new AdminUtilities;