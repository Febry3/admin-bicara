import { AxiosResponse } from "axios";
import { createContext } from "react";

export interface UserData {
    id: number,
    name: string,
    email: string
}

export interface Credential {
    email: string,
    password: string
}

export interface UserContextType {
    user: UserData | null,
    login: (credential: Credential) => Promise<AxiosResponse<any, any>>,
    logout: () => Promise<void>;
    refetchUser: () => void;
}

export const UserContext = createContext<UserContextType | undefined>(undefined);
