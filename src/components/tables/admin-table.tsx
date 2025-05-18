import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

import TableAction from "../table-action"

const counselors = [
    {
        id: 1,
        email: "john.doe@example.com",
        phone_number: "081234567890",
        password: "hashed_password_1",
        role: "Counselor",
        profile_url: "https://example.com/profiles/john.jpg",
        name: "John Doe",
        nickname: "johnny",
        gender: "male",
        birthdate: "1990-01-01",
        remember_token: null,
        created_at: "2024-05-01T10:00:00Z",
        updated_at: "2024-05-01T10:00:00Z",
        revenue: 100000
    },
    {
        id: 2,
        email: "jane.smith@example.com",
        phone_number: "081234567891",
        password: "hashed_password_2",
        role: "Admin",
        profile_url: "https://example.com/profiles/jane.jpg",
        name: "Jane Smith",
        nickname: "jane",
        gender: "female",
        birthdate: "1992-05-15",
        remember_token: null,
        created_at: "2024-05-01T10:10:00Z",
        updated_at: "2024-05-01T10:10:00Z",
        revenue: 100000
    },
    {
        id: 3,
        email: "alice.lee@example.com",
        phone_number: "081234567892",
        password: "hashed_password_3",
        role: "General",
        profile_url: "https://example.com/profiles/alice.jpg",
        name: "Alice Lee",
        nickname: "ali",
        gender: "female",
        birthdate: "1995-03-20",
        remember_token: null,
        created_at: "2024-05-01T10:20:00Z",
        updated_at: "2024-05-01T10:20:00Z",
        revenue: 100000
    },
    {
        id: 4,
        email: "bob.stone@example.com",
        phone_number: "081234567893",
        password: "hashed_password_4",
        role: "Counselor",
        profile_url: "https://example.com/profiles/bob.jpg",
        name: "Bob Stone",
        nickname: "bobby",
        gender: "male",
        birthdate: "1988-08-08",
        remember_token: null,
        created_at: "2024-05-01T10:30:00Z",
        updated_at: "2024-05-01T10:30:00Z",
        revenue: 100000
    },
    {
        id: 5,
        email: "clara.johnson@example.com",
        phone_number: "081234567894",
        password: "hashed_password_5",
        role: "Admin",
        profile_url: "https://example.com/profiles/clara.jpg",
        name: "Clara Johnson",
        nickname: "cj",
        gender: "female",
        birthdate: "1991-11-11",
        remember_token: null,
        created_at: "2024-05-01T10:40:00Z",
        updated_at: "2024-05-01T10:40:00Z",
        revenue: 100000
    },
    {
        id: 6,
        email: "david.wong@example.com",
        phone_number: "081234567895",
        password: "hashed_password_6",
        role: "General",
        profile_url: "https://example.com/profiles/david.jpg",
        name: "David Wong",
        nickname: "dave",
        gender: "male",
        birthdate: "1993-06-06",
        remember_token: null,
        created_at: "2024-05-01T10:50:00Z",
        updated_at: "2024-05-01T10:50:00Z",
        revenue: 100000
    },
    {
        id: 7,
        email: "emily.tan@example.com",
        phone_number: "081234567896",
        password: "hashed_password_7",
        role: "Counselor",
        profile_url: "https://example.com/profiles/emily.jpg",
        name: "Emily Tan",
        nickname: "em",
        gender: "female",
        birthdate: "1994-07-21",
        remember_token: null,
        created_at: "2024-05-01T11:00:00Z",
        updated_at: "2024-05-01T11:00:00Z",
        revenue: 100000
    },
    {
        id: 8,
        email: "michael.chen@example.com",
        phone_number: "081234567897",
        password: "hashed_password_8",
        role: "General",
        profile_url: "https://example.com/profiles/michael.jpg",
        name: "Michael Chen",
        nickname: "mike",
        gender: "male",
        birthdate: "1996-09-09",
        remember_token: null,
        created_at: "2024-05-01T11:10:00Z",
        updated_at: "2024-05-01T11:10:00Z",
        revenue: 100000
    },
    {
        id: 9,
        email: "susan.lim@example.com",
        phone_number: "081234567898",
        password: "hashed_password_9",
        role: "Counselor",
        profile_url: "https://example.com/profiles/susan.jpg",
        name: "Susan Lim",
        nickname: "su",
        gender: "female",
        birthdate: "1997-02-14",
        remember_token: null,
        created_at: "2024-05-01T11:20:00Z",
        updated_at: "2024-05-01T11:20:00Z",
        revenue: 100000
    },
    {
        id: 10,
        email: "kevin.hart@example.com",
        phone_number: "081234567899",
        password: "hashed_password_10",
        role: "Admin",
        profile_url: "https://example.com/profiles/kevin.jpg",
        name: "Kevin Hart",
        nickname: "kev",
        gender: "male",
        birthdate: "1985-12-25",
        remember_token: null,
        created_at: "2024-05-01T11:30:00Z",
        updated_at: "2024-05-01T11:30:00Z",
        revenue: 100000
    }
];

export default function AdminTable() {
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[5%] text-center">No</TableHead>
                    <TableHead >Name</TableHead>
                    <TableHead >Phone Number</TableHead>
                    <TableHead >Gender</TableHead>
                    <TableHead >Role</TableHead>
                    <TableHead >Joined at</TableHead>
                    <TableHead ></TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {counselors.map((counselor, index) => (
                    <TableRow key={index}>
                        <TableCell className="font-medium text-center">{index + 1}</TableCell>
                        <TableCell>{counselor.name}</TableCell>
                        <TableCell>{counselor.phone_number}</TableCell>
                        <TableCell>{counselor.gender}</TableCell>
                        <TableCell>{counselor.role}</TableCell>
                        <TableCell>{counselor.created_at}</TableCell>
                        <TableCell className="text-center">
                            <TableAction />
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table >
    )
}
