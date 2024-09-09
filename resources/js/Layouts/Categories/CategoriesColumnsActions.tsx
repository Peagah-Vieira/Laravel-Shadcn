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
import { Category } from "@/types"
import { useState } from "react"
import { CategoryViewDialog } from "./CategoryViewDialog"
import { CategoryEditDialog } from "./CategoryEditDialog"
import { CategoryDeleteDialog } from "./CategoryDeleteDialog"

type props = {
    category: Category
}

export default function CategoriesColumnsActions({ category }: props) {
    const { toast } = useToast()
    const [isViewDialogOpen, setIsViewDialogOpen] = useState(false)
    const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
    const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)

    return (
        <DropdownMenu>
            <CategoryViewDialog open={isViewDialogOpen} onOpenChange={setIsViewDialogOpen} category={category} />
            <CategoryEditDialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen} category={category} />
            <CategoryDeleteDialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen} category={category} />
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
                    navigator.clipboard.writeText(category.id.toString()),
                    toast({
                        title: "Clipboard.",
                        description: "The Category ID has been successfully copied.",
                    })]
                } className="cursor-pointer" >
                    Copy Category ID
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
