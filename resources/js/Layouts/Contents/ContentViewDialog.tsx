import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/Components/ui/dialog"
import { Input } from "@/Components/ui/input"
import { Label } from "@/Components/ui/label"
import { Content } from "@/types"

type props = {
    open?: boolean,
    onOpenChange?(open: boolean): void,
    content: Content
}

export function ContentViewDialog({ content, open, onOpenChange }: props) {
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
                            <Label htmlFor="content_title" className="text-left">
                                Content Title
                            </Label>
                            <Input
                                type="name"
                                id="content_title"
                                name="content_title"
                                autoComplete="content_title"
                                placeholder="@Content Title"
                                value={content.content_title}
                                disabled
                                className="col-span-3"
                            />
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
                                value={content.content_description}
                                disabled
                                className="col-span-3"
                            />
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
                                value={content.content_type}
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
