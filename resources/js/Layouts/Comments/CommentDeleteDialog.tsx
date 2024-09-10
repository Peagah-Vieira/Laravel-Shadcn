import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/Components/ui/alert-dialog"
import { FormEventHandler } from 'react';
import { useForm } from '@inertiajs/react';
import { useToast } from "@/hooks/use-toast"
import { Comment } from "@/types";

type props = {
    open?: boolean,
    onOpenChange?(open: boolean): void,
    comment: Comment
}

export function CommentDeleteDialog({ comment, open, onOpenChange }: props,) {
    const { delete: destroy, processing } = useForm()
    const { toast } = useToast()

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        destroy(route('comment.destroy', comment.id), {
            onFinish: () => toast({
                title: "Comment",
                description: "The Comment has been successfully deleted.",
            })
        });
    };

    return (
        <AlertDialog open={open} onOpenChange={onOpenChange}>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                        This action cannot be undone. This will permanently delete this category from Database.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <form onSubmit={submit}>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction className="bg-destructive text-destructive-foreground hover:bg-destructive/90" type="submit" disabled={processing}>Continue</AlertDialogAction>
                    </form>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}
