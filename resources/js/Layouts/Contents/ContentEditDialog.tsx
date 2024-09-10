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
import { Content } from "@/types"

type props = {
    open?: boolean,
    onOpenChange?(open: boolean): void,
    content: Content
}

export function ContentEditDialog({ content, open, onOpenChange }: props,) {
    const { toast } = useToast()

    const { data, setData, patch, processing, errors, reset } = useForm({
        content_title: content.content_title,
        content_description: content.content_description,
        content_type: content.content_type,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        patch(route('content.update', content.id), {
            onFinish: () => [
                reset('content_title', 'content_description', 'content_type'),
                toast({
                    title: "Content Title" + " - " + content.content_title,
                    description: "The Content has been successfully updated.",
                })
            ],
        });
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-[425px]">
                <form onSubmit={submit}>
                    <DialogHeader>
                        <DialogTitle>Edit Content</DialogTitle>
                        <DialogDescription>
                            Fill in the details below to edit the content. Click Save when you're done.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-2">
                            <Label htmlFor="content_title" className="text-left">
                                Content Title
                            </Label>
                            <Input
                                type="name"
                                id="content_title"
                                name="content_title"
                                autoComplete="content_title"
                                placeholder="@Content Title"
                                value={data.content_title}
                                onChange={(e) => setData('content_title', e.target.value)}
                                className="col-span-3"
                            />
                            <InputError message={errors.content_title} className="mt-2" />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-2">
                            <Label htmlFor="content_description" className="text-left">
                                Content Description
                            </Label>
                            <Input
                                type="name"
                                id="content_description"
                                name="content_description"
                                autoComplete="content_description"
                                placeholder="@Content Description"
                                value={data.content_description}
                                onChange={(e) => setData('content_description', e.target.value)}
                                className="col-span-3"
                            />
                            <InputError message={errors.content_description} className="mt-2" />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-2">
                            <Label htmlFor="content_type" className="text-left">
                                Content Type
                            </Label>
                            <Input
                                type="name"
                                id="content_type"
                                name="content_type"
                                autoComplete="content_type"
                                placeholder="@Content Type"
                                value={data.content_type}
                                onChange={(e) => setData('content_type', e.target.value)}
                                className="col-span-3"
                            />
                            <InputError message={errors.content_type} className="mt-2" />
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
