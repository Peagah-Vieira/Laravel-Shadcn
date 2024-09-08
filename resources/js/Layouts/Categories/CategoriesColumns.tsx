import { Category } from "@/types"
import { ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal } from "lucide-react"
import { Button } from "@/Components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu"
import { Checkbox } from "@/Components/ui/checkbox"
import { DataTableColumnHeader } from "../Table/DataTableColumnHeaderLayout"

export const CategoriesColumns: ColumnDef<Category>[] = [
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
        accessorKey: "category_name",
        header: ({ column }) => {
            return (
                <DataTableColumnHeader column={column} title="Category Name" />
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
        cell: ({ row }) => {
            const formatted = new Date(row.getValue("created_at")).toLocaleString()
            return formatted
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
        cell: ({ row }) => {
            const formatted = new Date(row.getValue("created_at")).toLocaleString()
            return formatted
        },
        enableGlobalFilter: true,
        filterFn: "inNumberRange"
    },
    {
        id: "actions",
        cell: ({ row }) => {
            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="cursor-pointer">
                            View
                        </DropdownMenuItem>
                        <DropdownMenuItem className="cursor-pointer">
                            Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem className="cursor-pointer">
                            Delete
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        },
        enableGlobalFilter: false
    },
]
