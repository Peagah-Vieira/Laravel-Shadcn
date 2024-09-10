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
import { Comment } from "@/types"
import { useState } from "react"
import { CommentViewDialog } from "./CommentViewDialog"
import { CommentEditDialog } from "./CommentEditDialog"
import { CommentDeleteDialog } from "./CommentDeleteDialog"

type props = {
    comment: Comment
}

export default function CommentsColumnsActions({ comment }: props) {
    const { toast } = useToast()
    const [isViewDialogOpen, setIsViewDialogOpen] = useState(false)
    const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
    const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)

    return (
        <DropdownMenu>
            <CommentViewDialog open={isViewDialogOpen} onOpenChange={setIsViewDialogOpen} comment={comment} />
            <CommentEditDialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen} comment={comment} />
            <CommentDeleteDialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen} comment={comment} />
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
                    navigator.clipboard.writeText(comment.id.toString()),
                    toast({
                        title: "Clipboard.",
                        description: "The Comment ID has been successfully copied.",
                    })]
                } className="cursor-pointer" >
                    Copy Comment ID
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
