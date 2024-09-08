import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
} from "@/Components/ui/dropdown-menu"
import { MoreHorizontal } from "lucide-react"
import { Button } from "@/Components/ui/button"
import { useToast } from "@/hooks/use-toast"
import { User } from "@/types"
import { useState } from "react"
import { UserEditDialog } from "./UserEditDialog"
import { UserViewDialog } from "./UserViewDialog"

type props = {
    user: User
}

export default function UsersColumnsActions({ user }: props) {
    const { toast } = useToast()
    const [isViewDialogOpen, setIsViewDialogOpen] = useState(false)
    const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)

    return (
        <DropdownMenu>
            <UserViewDialog open={isViewDialogOpen} onOpenChange={setIsViewDialogOpen} />
            <UserEditDialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen} />
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                    <span className="sr-only">Open menu</span>
                    <MoreHorizontal className="h-4 w-4" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => [
                    navigator.clipboard.writeText(user.id.toString()),
                    toast({
                        title: "Clipboard.",
                        description: "The User ID has been successfully copied.",
                    })]
                } className="cursor-pointer" >
                    Copy User ID
                </DropdownMenuItem >
                <DropdownMenuItem onClick={() => setIsViewDialogOpen(true)}
                    className="cursor-pointer">
                    View
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setIsEditDialogOpen(true)}
                    className="cursor-pointer">
                    Edit
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                    Delete
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu >
    )
}
