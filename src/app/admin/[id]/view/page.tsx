export default function ViewAdminPage({ params }: { params: { id: string } }) {
    return (
        <>
            <h1>{params.id}</h1>
        </>
    )
}