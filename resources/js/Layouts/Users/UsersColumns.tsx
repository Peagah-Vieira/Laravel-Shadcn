import { User } from "@/types"
import { ColumnDef } from "@tanstack/react-table"
import { Checkbox } from "@/Components/ui/checkbox"
import { DataTableColumnHeader } from "../Table/DataTableColumnHeaderLayout"
import UsersColumnsActions from "./UsersColumnsActions"

export const UsersColumns: ColumnDef<User>[] = [
    {
        id: "select",
        header: ({ table }) => (
            <Checkbox
                checked={
                    table.getIsAllPageRowsSelected() ||
                    (table.getIsSomePageRowsSelected() && "indeterminate")
                }
                onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                aria-label="Select all"
            />
        ),
        cell: ({ row }) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label="Select row"
            />
        ),
        enableGlobalFilter: false,
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "id",
        header: ({ column }) => {
            return (
                <DataTableColumnHeader column={column} title="Id" />
            )
        },
        enableGlobalFilter: true,
        filterFn: "equals"
    },
    {
        accessorKey: "name",
        header: ({ column }) => {
            return (
                <DataTableColumnHeader column={column} title="Name" />
            )
        },
        enableGlobalFilter: true,
        filterFn: "includesString"
    },
    {
        accessorKey: "email",
        header: ({ column }) => {
            return (
                <DataTableColumnHeader column={column} title="Email" />
            )
        },
        enableGlobalFilter: true,
        filterFn: "includesString"
    },
    {
        accessorKey: "created_at",
        header: ({ column }) => {
            return (
                <DataTableColumnHeader column={column} title="Created_At" />
            )
        },
        enableGlobalFilter: true,
        filterFn: "inNumberRange"
    },
    {
        accessorKey: "updated_at",
        header: ({ column }) => {
            return (
                <DataTableColumnHeader column={column} title="Updated_At" />
            )
        },
        enableGlobalFilter: true,
        filterFn: "inNumberRange"
    },
    {
        id: "actions",
        cell: ({ row }) => {
            const user = row.original

            return (
                <UsersColumnsActions user={user} />
            )
        },
        enableGlobalFilter: false
    },
]
