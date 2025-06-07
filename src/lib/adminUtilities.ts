import { AxiosError, AxiosResponse } from "axios";
import axiosClient from "./axiosClient";
import { UserAttribute } from "@/types/app-type";

class AdminUtilities {
    public async createAdmin(formData: FormData): Promise<AxiosResponse> {
        try {
            const response = await axiosClient.post("/admin/account?role=admin", formData);
            return response.data;
        } catch (err) {
            if (err instanceof AxiosError) {
                console.error(err);
                console.log(err.response);
                return err.response as AxiosResponse;
            }
            console.error("An unexpected error occurred:", err);
            throw err;
        }
    }

    public async getAllAdmin(): Promise<UserAttribute[]> {
        try {
            const response = await axiosClient.get("/admin/account/admin");
            console.log(response.data.data)
            return response.data.data;
        } catch (err) {
            console.error(err);
            throw err;
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
        } catch (err) {
            if (err instanceof AxiosError) {
                console.error(err);
                console.log(err.response);
                return err.response as AxiosResponse;
            }
            console.error("An unexpected error occurred:", err);
            throw err;
        }
    }

    public async deleteAdmin(id: string): Promise<void> {
        try {

            await axiosClient.delete(`/admin/account/${id}`);
        } catch (err) {
            console.error(err);
            throw err;
        }
    }
}

export default new AdminUtilities;