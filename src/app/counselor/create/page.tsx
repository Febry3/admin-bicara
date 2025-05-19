import RouteButton from "@/components/buttons/RouteButton";

export default function CreateCounselorPage() {
    return (
        <div className="flex flex-col gap-3">
            <div className="flex flex-row items-center gap-3">
                <RouteButton className="bg-white text-black border shadow-sm" variant="outline" path="/counselor" title="Back" />
                <h1 className="text-2xl font-medium">Create Counselor Form</h1>
            </div>
            <div>
                <div className="flex flex-row gap-3">
                    <RouteButton path="/counselor" title="Discard" className="bg-white text-black border shadow-sm" variant="outline" />
                    <RouteButton path="/counselor" title="Create" />
                </div>
            </div>
        </div>
    );
}