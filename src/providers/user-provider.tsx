"use client";

import { useState, useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';
import { Credential, UserContext, UserData } from '../contexts/user-context';
import axiosClient, { url } from '@/lib/axiosClient';
import { redirect } from 'next/navigation';

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<UserData | null>(null);

    const fetchUser = async () => {
        // try {
        //     const response = await axiosClient.get(`admin`);
        //     setUser(response.data.data);
        // } catch (error) {
        //     setUser(null);
        //     // redirect("/login");
        // }
    };

    useEffect(() => {
        fetchUser();
    }, []);

    async function login(credentials: Credential): Promise<AxiosResponse<any, any>> {
        // await axios.get(`${url}/sanctum/csrf-cookie`);
        const response = await axiosClient.post(`login`, credentials);
        console.log(response.data)
        return response;
    };

    const logout = async () => {
        try {
            await axiosClient.post(`admin/logout`);
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