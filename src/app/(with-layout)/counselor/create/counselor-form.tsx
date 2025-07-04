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
import { cn, objectUrlToBlob } from "@/lib/utils"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import RouteButton from "@/components/buttons/RouteButton"

import { redirect } from "next/navigation"
import FileUpload from "@/components/file-upload"
import { useState } from "react"
import counselorUtilities from "@/lib/counselorUtilities"
import Loader from "@/components/loader"
import { toast, Toaster } from "sonner"

const formSchema = z.object({
    email: z.string().email({ message: "Invalid email" }),
    phone_number: z.string().regex(/^08[0-9]{8,12}$/),
    password: z.string().min(1, { message: "Required Password" }),
    role: z.enum(["Counselor"]),
    name: z.string().min(1, { message: "Required Name" }),
    nickname: z.string().min(1, { message: "Required Nickname" }),
    gender: z.enum(["male", "female"], {
        message: "Invalid Gender"
    }),
    birthdate: z.date({ message: "Required Birthdate" })
})

export function CounselorForm() {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [file, setFile] = useState<string | undefined>("");
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            phone_number: "",
            password: "",
            role: "Counselor",
            name: "",
            nickname: "",
            gender: undefined,
            birthdate: undefined
        },
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        const formData = new FormData();
        const blob = await objectUrlToBlob(file!);

        formData.append("email", values.email);
        formData.append("phone_number", values.phone_number);
        formData.append("password", values.password);
        formData.append("role", values.role);
        formData.append("name", values.name);
        formData.append("nickname", values.nickname);
        formData.append("gender", values.gender);
        formData.append("birthdate", values.birthdate.toDateString());

        if (blob.type.includes("image")) {
            formData.append("image", blob);
        }
        setIsLoading(true);
        const response = await counselorUtilities.createCounselor(formData);
        console.log(response.status)
        if (response.status != 422) {
            redirect("/counselor");
        } else {
            toast(
                <p className="text-red-500 font-bold">An error occured</p>,
                {
                    description:
                        <div>
                            <p>{response.data.message.email[0]}</p>
                            <p>{response.data.message.phone_number[0]}</p>
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

                        <h1 className="text-2xl font-medium">Create Counselor Form</h1>
                    </div>
                    <div className="flex flex-row gap-3">
                        <RouteButton path="/counselor" title="Discard" className="bg-white text-black border shadow-sm" variant="outline" />
                        <Button className="hover:cursor-pointer" onClick={form.handleSubmit(onSubmit)}>Create</Button>
                    </div>
                </div>
                <form className="space-y-8">
                    <div className="grid grid-cols-12 mt-5 gap-5">
                        <div className="col-span-8 border rounded-md shadow-sm p-7 flex flex-col gap-5">
                            <p className="text-xl">Counselor Data</p>
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
                                                    <Input placeholder="Password" type="password" {...field} />
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
                                                            initialFocus
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
