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
import { Category } from "@/types"

type props = {
    open?: boolean,
    onOpenChange?(open: boolean): void,
    category: Category
}

export function CategoryEditDialog({ category, open, onOpenChange }: props,) {
    const { toast } = useToast()

    const { data, setData, put, processing, errors, reset } = useForm({
        category_name: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        put(route('category.update', category.id), {
            onFinish: () => [
                reset('category_name'),
                toast({
                    title: "Category Name" + " - " + category.category_name,
                    description: "The Category has been successfully updated.",
                })
            ],
        });
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-[425px]">
                <form onSubmit={submit}>
                    <DialogHeader>
                        <DialogTitle>Edit Category </DialogTitle>
                        <DialogDescription>
                            Fill in the details below to edit a new user account. Click Save when you're done.
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
                        <Button type="submit" disabled={processing}>Save</Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog >
    )
}
