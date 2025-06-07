import { UserAttribute } from "@/types/app-type";
import axiosClient from "./axiosClient";
import { AxiosResponse } from "axios";

class CounselorUtilities {
    public async getAllCounselor(): Promise<void> {

    }

    public async createCounselor(formData: FormData): Promise<AxiosResponse> {
        try {
            const response = await axiosClient.post("/admin/account?role=counselor", formData);
            return response.data;
        } catch (err: any) {
            return err.response as AxiosResponse;
        }
    }

    public async editCounselor(id: number, counselor: UserAttribute): Promise<void> {

    }

    public async deleteCounselor(id: number): Promise<void> {

    }
}

export default new CounselorUtilities;