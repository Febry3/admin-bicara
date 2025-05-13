export default function DashboardCard({ children }: { children: React.ReactNode }) {
    return (
        <div className="border-1 shadow-sm rounded-sm p-3 flex h-34">
            {children}
        </div>
    )
}