"use client"

import RouteButton from "@/components/buttons/RouteButton";
import { UserAttribute } from "@/types/app-type";

const DataField = ({ label, value }: { label: string, value: string | undefined | null }) => (
    <div className="flex flex-col space-y-1.5">
        <p className="text-sm font-medium text-gray-500">{label}</p>
        <p className="w-full px-3 py-2 bg-gray-100/70 border rounded-md text-sm text-gray-800">
            {value || '-'}
        </p>
    </div>
);

export default function ViewAdminForm({ admin }: { admin: UserAttribute }) {
    return (
        <div>
            <div className="flex flex-row items-center justify-between mt-7">
                <div className="flex flex-row items-center gap-3">
                    <RouteButton
                        className="bg-white text-black border shadow-sm hover:bg-gray-50"
                        variant="outline"
                        path="/counselor"
                        title="Back"
                    />
                    <h1 className="text-2xl font-medium">Admin Details</h1>
                </div>
            </div>

            <div className="grid grid-cols-12 mt-5 gap-5">
                <div className="col-span-12 lg:col-span-8 border rounded-md shadow-sm p-7 flex flex-col gap-6">
                    <p className="text-xl font-semibold text-gray-800">Admin Data</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <DataField label="Name" value={admin.name} />
                        <DataField label="Nickname" value={admin.nickname} />
                    </div>

                    <DataField label="Email" value={admin.email} />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <DataField label="Phone Number" value={admin.phone_number} />
                        <DataField label="Role" value={admin.role} />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <DataField label="Gender" value={admin.gender} />
                        <DataField
                            label="Birthdate"
                            value={admin.birthdate ? new Date(admin.birthdate).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                            }) : undefined}
                        />
                    </div>
                </div>

                <div className="col-span-12 lg:col-span-4 border rounded-md shadow-sm p-7 flex flex-col gap-5">
                    <p className="text-xl font-semibold text-gray-800">Profile Image</p>
                    <div className="w-full aspect-square bg-gray-100 rounded-md flex items-center justify-center overflow-hidden">
                        <span className="text-gray-500">No Image</span>
                    </div>
                </div>
            </div>
        </div>
    );
}