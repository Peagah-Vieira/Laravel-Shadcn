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
import { Tag } from "@/types"

type props = {
    open?: boolean,
    onOpenChange?(open: boolean): void,
    tag: Tag
}

export function TagEditDialog({ tag, open, onOpenChange }: props,) {
    const { toast } = useToast()

    const { data, setData, patch, processing, errors, reset } = useForm({
        tag_name: tag.tag_name,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        patch(route('tag.update', tag.id), {
            onFinish: () => [
                reset('tag_name'),
                toast({
                    title: "Tag Name" + " - " + tag.tag_name,
                    description: "The Tag has been successfully updated.",
                })
            ],
        });
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-[425px]">
                <form onSubmit={submit}>
                    <DialogHeader>
                        <DialogTitle>Edit Tag</DialogTitle>
                        <DialogDescription>
                            Fill in the details below to edit the tag. Click Save when you're done.
                        </DialogDescription>
                    </DialogHeader>
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
                                placeholder="@Content Title"
                                value={data.tag_name}
                                onChange={(e) => setData('tag_name', e.target.value)}
                                className="col-span-3"
                            />
                            <InputError message={errors.tag_name} className="mt-2" />
                        </div>
                    </div>
                    <DialogFooter>
                        <Button type="submit" disabled={processing}>Save</Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog >
    )
}
