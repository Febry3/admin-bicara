import { BarLoader } from "react-spinners";

export default function Loader() {
    return (
        <div className="absolute inset-0 z-50 grid place-items-center bg-white/80 backdrop-blur-sm">
            <div className="text-center">
                <BarLoader width={250} color="var(--primary-color)" />
                <p className="mt-3 text-lg text-[var(--primary-color)]">Tunggu ye...</p>
            </div>
        </div>
    );
}