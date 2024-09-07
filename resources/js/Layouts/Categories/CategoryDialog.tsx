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

export function CategoryDialog() {
    const { data, setData, post, processing, errors, reset } = useForm({
        category_name: '',
    });

    const { toast } = useToast()

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('category.store'), {
            onFinish: () => [
                reset('category_name'),
                toast({
                    title: "Category Name" + " - " + data.category_name,
                    description: "The Category has been successfully created.",
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
                        Create Category
                    </span>
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <form onSubmit={submit}>
                    <DialogHeader>
                        <DialogTitle>Create Category</DialogTitle>
                        <DialogDescription>
                            Fill in the details below to create a new category. Click Create when you're done.
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
                                value={data.category_name}
                                onChange={(e) => setData('category_name', e.target.value)}
                                required
                                className="col-span-3"
                            />
                            <InputError message={errors.category_name} className="mt-2" />
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
