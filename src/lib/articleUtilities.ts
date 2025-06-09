import { ArticleAttribute } from "@/types/app-type";
import axiosClient from "./axiosClient";

class ArticleUtilities {
    public async updateArticleStatus(id: string, status: string) {
        try {
            await axiosClient.patch(`/admin/article/${id}`, {
                status: status
            });
        } catch (err) {
            console.error(err);
            throw err;
        }
    }
}

export default new ArticleUtilities;