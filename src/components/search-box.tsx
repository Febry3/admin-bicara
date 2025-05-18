"use client"
import { useState } from "react";
import { Input } from "./ui/input";


export default function SearchBox() {
    const [title, setTitle] = useState<string>('');
    return (
        <Input
            className="w-100 border-1 shadow-sm"
            placeholder="Filter berdasarkan judul..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
        />
    )
}