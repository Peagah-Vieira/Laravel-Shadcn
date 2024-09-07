import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
} from "@/Components/ui/dropdown-menu"
import { MoreHorizontal } from "lucide-react"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogFooter
} from "@/Components/ui/dialog"
import { Input } from "@/Components/ui/input"
import { Label } from "@/Components/ui/label"
import { Button } from "@/Components/ui/button"
import { useToast } from "@/hooks/use-toast"
import { User } from "@/types"
import { useState } from "react"

type props = {
    user: User
}

export default function UsersColumnsActions({ user }: props) {
    const { toast } = useToast()
    const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)

    return (
        <DropdownMenu>
            <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Edit User</DialogTitle>
                        <DialogDescription>
                            Fill in the details below to edit a new user account. Click Save when you're done.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="name" className="text-right">
                                Name
                            </Label>
                            <Input
                                id="name"
                                defaultValue="Pedro Duarte"
                                className="col-span-3"
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="username" className="text-right">
                                Username
                            </Label>
                            <Input
                                id="username"
                                defaultValue="@peduarte"
                                className="col-span-3"
                            />
                        </div>
                    </div>
                    <DialogFooter>
                        <Button type="submit">Save</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
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
                <DropdownMenuItem className="cursor-pointer">
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
