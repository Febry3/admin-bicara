import Image from "next/image"

export default function NoDataCell() {
    return (
        <div className="flex flex-col justify-center items-center">
            <div className="relative w-[170px] aspect-video opacity-40">
                <Image
                    src="/empty.png"
                    alt="gambar"
                    fill
                    className="object-cover rounded-md"
                />
            </div>
            <p className="text-lg opacity-40 pt-5">Data Kosong</p>
        </div>
    );
}