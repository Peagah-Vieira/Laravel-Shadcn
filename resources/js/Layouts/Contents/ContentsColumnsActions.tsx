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
import { Content } from "@/types"
import { useState } from "react"
import { ContentViewDialog } from "./ContentViewDialog"
import { ContentEditDialog } from "./ContentEditDialog"
import { ContentDeleteDialog } from "./ContentDeleteDialog"

type props = {
    content: Content
}

export default function ContentsColumnsActions({ content }: props) {
    const { toast } = useToast()
    const [isViewDialogOpen, setIsViewDialogOpen] = useState(false)
    const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
    const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)

    return (
        <DropdownMenu>
            <ContentViewDialog open={isViewDialogOpen} onOpenChange={setIsViewDialogOpen} content={content} />
            <ContentEditDialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen} content={content} />
            <ContentDeleteDialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen} content={content} />
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
                    navigator.clipboard.writeText(content.id.toString()),
                    toast({
                        title: "Clipboard.",
                        description: "The Content ID has been successfully copied.",
                    })]
                } className="cursor-pointer" >
                    Copy Content ID
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
