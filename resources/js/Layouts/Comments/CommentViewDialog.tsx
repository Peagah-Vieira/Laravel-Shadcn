import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/Components/ui/dialog"
import { Input } from "@/Components/ui/input"
import { Label } from "@/Components/ui/label"
import { Comment } from "@/types"

type props = {
    open?: boolean,
    onOpenChange?(open: boolean): void,
    comment: Comment
}

export function CommentViewDialog({ comment, open, onOpenChange }: props) {
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>View Comment</DialogTitle>
                    <DialogDescription>
                        You can see the comment details below.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                </div>
            </DialogContent>
        </Dialog >
    )
}
