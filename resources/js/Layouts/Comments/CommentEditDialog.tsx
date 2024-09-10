import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogFooter
} from "@/Components/ui/dialog"
import { Input } from "@/Components/ui/input"
import InputError from "@/Components/ui/InputError";
import { Label } from "@/Components/ui/label"
import { Button } from "@/Components/ui/button"
import { useForm } from '@inertiajs/react';
import { useToast } from "@/hooks/use-toast"
import { FormEventHandler } from 'react';
import { Comment } from "@/types"

type props = {
    open?: boolean,
    onOpenChange?(open: boolean): void,
    comment: Comment
}

export function CommentEditDialog({ comment, open, onOpenChange }: props,) {
    const { toast } = useToast()

    const { data, setData, put, processing, errors, reset } = useForm({
        user_id: comment.user_id,
        content_id: comment.content_id,
        comment_text: comment.comment_text,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        put(route('comment.update', comment.id), {
            onFinish: () => [
                reset('user_id', 'content_id', 'comment_text'),
                toast({
                    title: "Comment",
                    description: "The Comment has been successfully updated.",
                })
            ],
        });
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-[425px]">
                <form onSubmit={submit}>
                    <DialogHeader>
                        <DialogTitle>Edit Comment</DialogTitle>
                        <DialogDescription>
                            Fill in the details below to edit the comment. Click Save when you're done.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                    </div>
                    <DialogFooter>
                        <Button type="submit" disabled={processing}>Save</Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog >
    )
}
