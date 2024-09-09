import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/Components/ui/dialog"
import { Input } from "@/Components/ui/input"
import { Label } from "@/Components/ui/label"
import { Category } from "@/types"

type props = {
    open?: boolean,
    onOpenChange?(open: boolean): void,
    category: Category
}

export function CategoryViewDialog({ category, open, onOpenChange }: props) {
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>View Category</DialogTitle>
                    <DialogDescription>
                        You can see the category details below.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="category_name" className="text-right">
                            Name
                        </Label>
                        <Input
                            type="name"
                            id="category_name"
                            name="category_name"
                            autoComplete="category_name"
                            placeholder="@Category"
                            value={category.category_name}
                            disabled
                            className="col-span-3"
                        />
                    </div>
                </div>
            </DialogContent>
        </Dialog >
    )
}
