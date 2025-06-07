"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { format } from "date-fns"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import RouteButton from "@/components/buttons/RouteButton"

import { redirect } from "next/navigation"
import FileUpload from "@/components/file-upload"
import { useState } from "react"
import Loader from "@/components/loader";
import adminUtilities from "@/lib/adminUtilities";
import { toast, Toaster } from "sonner";
import { UserAttribute } from "@/types/app-type";

const adminFormSchema = z.object({
    email: z.string().email({ message: "Invalid email" }),
    phone_number: z.string().regex(/^08[0-9]{8,12}$/),
    password: z.string().optional(),
    role: z.enum(["Admin"]),
    name: z.string().min(1, { message: "Required Name" }),
    nickname: z.string().min(1, { message: "Required Nickname" }),
    gender: z.enum(["male", "female"], {
        message: "Invalid Gender"
    }),
    birthdate: z.date().optional(),
})

export default function EditAdminForm({ admin }: { admin: UserAttribute }) {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [file, setFile] = useState<string | undefined>("");
    const form = useForm<z.infer<typeof adminFormSchema>>({
        resolver: zodResolver(adminFormSchema),
        defaultValues: {
            email: admin.email,
            phone_number: admin.phone_number,
            role: admin.role as "Admin" || "",
            name: admin.name,
            nickname: admin.nickname,
            gender: admin.gender as "female" || "male",
            birthdate: new Date(admin.birthdate)
        },
    })

    async function onSubmit(values: z.infer<typeof adminFormSchema>) {
        setIsLoading(true);
        const response = await adminUtilities.editAdmin({
            email: values.email,
            phone_number: values.phone_number,
            name: values.name,
            nickname: values.nickname,
            birthdate: values.birthdate,
            gender: values.gender,
            id: admin.id
        } as UserAttribute);
        if (response.status != 422) {
            redirect("/admin");
        } else {
            toast(
                <p className="text-red-500 font-bold">An error occured</p>,
                {
                    description:
                        <div>
                            <p>{response.data.message}</p>
                        </div>,
                });
        }
        setIsLoading(false);
    }

    return (
        <div className="relative">
            <Form {...form}>
                <Toaster position="bottom-right" />
                {isLoading && <Loader />}
                <div className="flex flex-row items-center justify-between mt-7">
                    <div className="flex flex-row items-center gap-3">
                        <RouteButton className="bg-white text-black border shadow-sm" variant="outline" path="/counselor" title="Back" />
                        <h1 className="text-2xl font-medium">Edit Admin Form</h1>
                    </div>
                    <div className="flex flex-row gap-3">
                        <RouteButton path="/counselor" title="Discard" className="bg-white text-black border shadow-sm" variant="outline" />
                        <Button className="hover:cursor-pointer" onClick={form.handleSubmit(onSubmit)}>Edit</Button>
                    </div>
                </div>
                <form className="space-y-8">
                    <div className="grid grid-cols-12 mt-5 gap-5">
                        <div className="col-span-8 border rounded-md shadow-sm p-7 flex flex-col gap-5">
                            <p className="text-xl">Admin Data</p>
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input placeholder="asep@gmail.com" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <div className="grid grid-cols-2 gap-3">
                                <div className="col-span-1">
                                    <FormField
                                        control={form.control}
                                        name="phone_number"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Phone Number</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="08123456789" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <div className="col-span-1">
                                    <FormField
                                        control={form.control}
                                        name="password"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Password</FormLabel>
                                                <FormControl>
                                                    <Input disabled placeholder="Password" type="password" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                            </div>
                            <FormField
                                control={form.control}
                                name="role"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Role</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Role" disabled {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Name" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="nickname"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Nickname</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Nickname" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <div className="grid grid-cols-2 gap-3">
                                <div className="col-span-1">
                                    <FormField
                                        control={form.control}
                                        name="gender"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Gender</FormLabel>
                                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                    <FormControl>
                                                        <SelectTrigger>
                                                            <SelectValue placeholder="Select Gender" />
                                                        </SelectTrigger>
                                                    </FormControl>
                                                    <SelectContent>
                                                        <SelectItem value="male">Male</SelectItem>
                                                        <SelectItem value="female">Female</SelectItem>
                                                        <SelectItem value="other">Other</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <div className="col-span-1">
                                    <FormField
                                        control={form.control}
                                        name="birthdate"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Birthdate</FormLabel>
                                                <Popover>
                                                    <PopoverTrigger asChild>
                                                        <FormControl>
                                                            <Button
                                                                variant={"outline"}
                                                                className={cn(
                                                                    "w-full pl-3 text-left font-normal",
                                                                    !field.value && "text-muted-foreground"
                                                                )}
                                                            >
                                                                {field.value ? (
                                                                    format(field.value, "PPP")
                                                                ) : (
                                                                    <span>Pick a date</span>
                                                                )}
                                                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                                            </Button>
                                                        </FormControl>
                                                    </PopoverTrigger>
                                                    <PopoverContent className="w-auto p-0" align="start">
                                                        <Calendar
                                                            mode="single"
                                                            selected={field.value}
                                                            onSelect={field.onChange}
                                                            disabled={(date) =>
                                                                date > new Date() || date < new Date("1900-01-01")
                                                            }
                                                        />
                                                    </PopoverContent>
                                                </Popover>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                            </div>

                        </div>
                        <div className="col-span-4 border rounded-md shadow-sm p-7 flex flex-col gap-5 h-90">
                            <p className="text-xl">Upload Image</p>
                            <div className="border-2 border-black rounded-sm border-dashed h-full p-5 flex flex-col justify-center gap-3 items-center">
                                <FileUpload file={file} setFile={setFile} />
                            </div>
                        </div>
                    </div>
                </form>
            </Form >
        </div>
    )
}
