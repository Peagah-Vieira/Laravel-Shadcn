import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter
} from "@/Components/ui/dialog"
import { Input } from "@/Components/ui/input"
import InputError from "@/Components/ui/InputError";
import { Label } from "@/Components/ui/label"
import { Button } from "@/Components/ui/button"
import { PlusCircle } from "lucide-react"
import { FormEventHandler } from 'react';
import { useForm } from '@inertiajs/react';
import { useToast } from "@/hooks/use-toast"

export function TagCreateDialog() {
    const { data, setData, post, processing, errors, reset } = useForm({
        tag_name: '',
    });

    const { toast } = useToast()

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('tag.store'), {
            onFinish: () => [
                reset('tag_name',),
                toast({
                    title: "Tag Name" + " - " + data.tag_name,
                    description: "The Tag has been successfully created.",
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
                        Create Tag
                    </span>
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <form onSubmit={submit}>
                    <DialogHeader>
                        <DialogTitle>Create Tag</DialogTitle>
                        <DialogDescription>
                            Fill in the details below to create a new tag. Click Create when you're done.
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
                                placeholder="@Tag Name"
                                value={data.tag_name}
                                onChange={(e) => setData('tag_name', e.target.value)}
                                required
                                className="col-span-3"
                            />
                            <InputError message={errors.tag_name} className="mt-2" />
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
