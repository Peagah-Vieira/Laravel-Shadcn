import { Content } from "@/types"
import { ColumnDef } from "@tanstack/react-table"
import { Checkbox } from "@/Components/ui/checkbox"
import { DataTableColumnHeader } from "../Table/DataTableColumnHeaderLayout"
import ContentsColumnsActions from "./ContentsColumnsActions"

export const ContentsColumns: ColumnDef<Content>[] = [
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
        accessorKey: "content_title",
        header: ({ column }) => {
            return (
                <DataTableColumnHeader column={column} title="Content Title" />
            )
        },
        enableGlobalFilter: true,
        filterFn: "includesString"
    },
    {
        accessorKey: "content_description",
        header: ({ column }) => {
            return (
                <DataTableColumnHeader column={column} title="Content Description" />
            )
        },
        enableGlobalFilter: true,
        filterFn: "includesString"
    },
    {
        accessorKey: "content_type",
        header: ({ column }) => {
            return (
                <DataTableColumnHeader column={column} title="Content Type" />
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
            const content = row.original
            return (
                <ContentsColumnsActions content={content} />
            )
        },
        enableGlobalFilter: false
    },
]
