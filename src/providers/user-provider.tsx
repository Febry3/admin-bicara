"use client";

import { useState, useEffect } from 'react';
import { AxiosResponse } from 'axios';
import { Credential, UserContext, UserData } from '../contexts/user-context';
import axiosClient, { apiUrl, url } from '@/lib/axiosClient';


export const UserProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<UserData | null>(null);

    const fetchUser = async () => {
        try {
            await axiosClient.get(`${url}/sanctum/csrf-cookie`);
            const response = await axiosClient.get(`${apiUrl}verify-token`);
            setUser(response.data);
        } catch (error) {
            setUser(null);
        }
    };

    useEffect(() => {
        fetchUser();
    }, []);

    async function login(credentials: Credential): Promise<AxiosResponse<any, any>> {
        await axiosClient.get(`${url}/sanctum/csrf-cookie`);
        const response = await axiosClient.post(`${apiUrl}login`, credentials);
        await fetchUser();
        return response;
    };

    const logout = async () => {
        try {
            await axiosClient.post(`${apiUrl}logout`);
            setUser(null);
        } catch (error) {
            console.error("Logout failed:", error);
        }
    };

    return (
        <UserContext.Provider value={{ user, login, logout, refetchUser: fetchUser }}>
            {children}
        </UserContext.Provider>
    );
};