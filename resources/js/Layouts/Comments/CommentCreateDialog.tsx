import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter
} from "@/Components/ui/dialog"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/Components/ui/select"
import { Input } from "@/Components/ui/input"
import InputError from "@/Components/ui/InputError";
import { Label } from "@/Components/ui/label"
import { Button } from "@/Components/ui/button"
import { PlusCircle } from "lucide-react"
import { FormEventHandler } from 'react';
import { useForm } from '@inertiajs/react';
import { useToast } from "@/hooks/use-toast"
import { Content } from "@/types";

type props = {
    contents: Content[],
}

export function CommentCreateDialog({ contents }: props) {
    const { data, setData, post, processing, errors, reset } = useForm({
        user_id: '',
        content_id: '',
        comment_text: '',
    });

    const { toast } = useToast()

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('comment.store'), {
            onFinish: () => [
                reset('user_id', 'content_id', 'comment_text'),
                toast({
                    title: "Comment",
                    description: "The Comment has been successfully created.",
                })
            ],
        });
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button size="sm" className="h-8 gap-1">
                    <PlusCircle className="h-3.5 w-3.5" />
                    <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                        Create Comment
                    </span>
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <form onSubmit={submit}>
                    <DialogHeader>
                        <DialogTitle>Create Comment</DialogTitle>
                        <DialogDescription>
                            Fill in the details below to create a new comment. Click Create when you're done.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-2">
                            <Label htmlFor="content_id" className="text-left">
                                Content
                            </Label>
                            <Select>
                                <SelectTrigger className="col-span-3">
                                    <SelectValue placeholder="Select a Content" />
                                </SelectTrigger>
                                <SelectContent>
                                    {contents.map((content) => (
                                        <SelectItem value={content.id.toString()}>{content.content_type}</SelectItem>
                                    ))
                                    }
                                </SelectContent>
                            </Select>
                            <InputError message={errors.content_id} className="mt-2" />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-2">
                            <Label htmlFor="comment_text" className="text-left">
                                Comment Text
                            </Label>
                            <Input
                                type="name"
                                id="comment_text"
                                name="comment_text"
                                autoComplete="comment_text"
                                placeholder="@Comment Text"
                                value={data.comment_text}
                                onChange={(e) => setData('comment_text', e.target.value)}
                                required
                                className="col-span-3"
                            />
                            <InputError message={errors.comment_text} className="mt-2" />
                        </div>
                    </div>
                    <DialogFooter>
                        <Button type="submit" disabled={processing}>Create</Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog >
    )
}
