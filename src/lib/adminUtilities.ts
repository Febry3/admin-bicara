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
            console.log(err.response)
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

    public async editAdmin(admin: UserAttribute): Promise<AxiosResponse> {
        try {
            console.log(admin.id);
            const response = await axiosClient.put(`/admin/account/${admin.id}`, {
                email: admin.email,
                phone_number: admin.phone_number,
                name: admin.name,
                nickname: admin.nickname,
                birthdate: admin.birthdate,
                gender: admin.gender
            });
            return response.data;
        } catch (err: any) {
            console.error(err);
            return err.response as AxiosResponse;
        }
    }

    public async deleteAdmin(id: string): Promise<void> {
        try {

            const response = await axiosClient.delete(`/admin/account/${id}`);
        } catch (err: any) {
            console.error(err);
        }
    }
}

export default new AdminUtilities;