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
import { Tag } from "@/types"
import { useState } from "react"
import { TagViewDialog } from "./TagViewDialog"
import { TagEditDialog } from "./TagEditDialog"
import { TagDeleteDialog } from "./TagDeleteDialog"

type props = {
    tag: Tag
}

export default function TagsColumnsActions({ tag }: props) {
    const { toast } = useToast()
    const [isViewDialogOpen, setIsViewDialogOpen] = useState(false)
    const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
    const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)

    return (
        <DropdownMenu>
            <TagViewDialog open={isViewDialogOpen} onOpenChange={setIsViewDialogOpen} tag={tag} />
            <TagEditDialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen} tag={tag} />
            <TagDeleteDialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen} tag={tag} />
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
                    navigator.clipboard.writeText(tag.id.toString()),
                    toast({
                        title: "Clipboard.",
                        description: "The Tag ID has been successfully copied.",
                    })]
                } className="cursor-pointer" >
                    Copy Tag ID
                </DropdownMenuItem >
                <DropdownMenuItem onClick={() => setIsViewDialogOpen(true)}
                    className="cursor-pointer">
                    View
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setIsEditDialogOpen(true)}
                    className="cursor-pointer">
                    Edit
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setIsDeleteDialogOpen(true)}
                    className="cursor-pointer">
                    Delete
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu >
    )
}
