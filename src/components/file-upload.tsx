"use client"

import { ImagePlus } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";

interface FileUploadProps {
    file: string | undefined;
    setFile: (inp: string | undefined) => void;
}

export default function FileUpload({ file, setFile }: FileUploadProps) {
    function handleReset(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        setFile("");
    }
    return (
        <div className="h-full w-full">
            {!file ? (
                <div
                    onDragOver={(e) => {
                        e.preventDefault();
                    }}
                    onDragLeave={() => {
                    }}
                    onDragEnd={(e) => {
                        e.preventDefault();
                    }}
                    onDrop={(e) => {
                        e.preventDefault();
                        if (e.dataTransfer.items) {
                            [...e.dataTransfer.items].forEach((item, i) => {
                                if (item.kind === "file") {
                                    const file = item.getAsFile();
                                    if (file) {
                                        const blobUrl = URL.createObjectURL(file);
                                        setFile(blobUrl);
                                    }
                                    console.log(`items file[${i}].name = ${file?.name}`);
                                }
                            });
                        } else {
                            [...e.dataTransfer.files].forEach((file, i) => {
                                console.log(`… file[${i}].name = ${file.name}`);
                            });
                        }
                    }}
                    className="h-full"
                >
                    <label
                        htmlFor="file"
                        className="h-full flex flex-col justify-center text-cente"
                    >
                        <div className="flex flex-col justify-center items-center gap-3">
                            <div className="border-dashed border-2 border-black p-3 rounded-4xl">
                                <ImagePlus />
                            </div>
                            <p className="text-md">Drag and Drop an Image</p>
                        </div>
                    </label>
                    <input
                        id="file"
                        type="file"
                        className="hidden"
                        onChange={(e) => {
                            const files = e.target.files;
                            if (files && files[0]) {
                                const blobUrl = URL.createObjectURL(files[0]);
                                setFile(blobUrl);
                            }
                        }}
                    />
                </div>
            ) : (
                <div className="h-full flex flex-col gap-3">
                    <div className="relative w-[100%] aspect-video">
                        <Image
                            src={file}
                            alt="gambar"
                            fill
                            className="object-contain rounded-md"
                        />
                    </div>
                    <Button className="bg-red-500 hover:bg-red-400" onClick={(e) => handleReset(e)}>Reset</Button>
                </div>
            )
            }
        </div >
    );
};