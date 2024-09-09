import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/Components/ui/card"
import { Button } from "@/Components/ui/button";
import { DeleteUserDialog } from "./DeleteUserDialog";
import { useState } from 'react';

export default function DeleteUserForm() {
    const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)

    return (
        <Card>
            <DeleteUserDialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen} />
            <CardHeader>
                <CardTitle>Delete Account</CardTitle>
                <CardDescription>
                    Once your account is deleted, all of its resources and data will be permanently deleted. Before
                    deleting your account, please download any data or information that you wish to retain.
                </CardDescription>
            </CardHeader>
            <CardFooter>
                <Button onClick={() => setIsDeleteDialogOpen(true)} variant={"destructive"}>DELETE ACCOUNT</Button>
            </CardFooter>
        </Card>
    )
}
