import { UserAttribute } from "@/types/app-type";
import axiosClient from "./axiosClient";
import { AxiosError, AxiosResponse } from "axios";

class CounselorUtilities {
    // public async getAllCounselor(): Promise<void> {

    // }

    public async createCounselor(formData: FormData): Promise<AxiosResponse> {
        try {
            const response = await axiosClient.post("/admin/account?role=counselor", formData);
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

    // public async deleteCounselor(id: number): Promise<void> {

    // }
}

export default new CounselorUtilities;