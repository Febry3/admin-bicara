"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import useUser from "@/hooks/use-user";
import axiosClient, { apiUrl, url } from "@/lib/axiosClient";
import Image from "next/image"
import { useRouter } from "next/navigation";
import { FormEvent } from "react";

export default function LoginPage() {
    const { login } = useUser();
    const router = useRouter();
    async function handleLogin(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);

        try {
            await axiosClient.get(`${url}/sanctum/csrf-cookie`);

            const response = await login({ email: formData.get("email")!.toString(), password: formData.get("password")!.toString() });

            if (response.status === 200) {
                router.push("/");
            }
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className="w-screen h-screen flex justify-center items-center">
            <div className="p-3 border rounded-lg shadow-sm h-[50%] w-[27.5%] flex flex-col items-center justify-center gap-6">
                <Image
                    src="/admin-bicara.png"
                    alt="gambar"
                    width={150}
                    height={150}
                    className="object-fit rounded-md"
                />
                <div className="w-[75%]">
                    <form method="post" onSubmit={handleLogin}>
                        <div className="">
                            <Label>Email</Label>
                            <Input name="email" type="text" placeholder="xyz@temanbicara.id" />
                        </div>
                        <div className="mt-5">
                            <Label>Password</Label>
                            <Input name="password" type="password" />
                        </div>
                        <div className="mt-5 flex justify-end">
                            <Button className="px-6">Login</Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}