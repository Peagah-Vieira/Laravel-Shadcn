import { User } from "@/types"
import { ColumnDef } from "@tanstack/react-table"

export const columns: ColumnDef<User>[] = [
    {
        accessorKey: "id",
        header: "Id",
    },
    {
        accessorKey: "name",
        header: "Name",
    },
    {
        accessorKey: "email",
        header: "Email",
    },
    {
        accessorKey: "created_at",
        header: "Created_At",
    },
    {
        accessorKey: "updated_at",
        header: "Updated_At",
    },
]
