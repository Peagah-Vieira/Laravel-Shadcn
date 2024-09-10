import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/Components/ui/dialog"
import { Input } from "@/Components/ui/input"
import { Label } from "@/Components/ui/label"
import { Tag } from "@/types"

type props = {
    open?: boolean,
    onOpenChange?(open: boolean): void,
    tag: Tag
}

export function TagViewDialog({ tag, open, onOpenChange }: props) {
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>View Content</DialogTitle>
                    <DialogDescription>
                        You can see the content details below.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-2">
                            <Label htmlFor="tag_name" className="text-left">
                                Tag Name
                            </Label>
                            <Input
                                type="name"
                                id="tag_name"
                                name="tag_name"
                                autoComplete="tag_name"
                                placeholder="@Tag Name"
                                value={tag.tag_name}
                                disabled
                                className="col-span-3"
                            />
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog >
    )
}
