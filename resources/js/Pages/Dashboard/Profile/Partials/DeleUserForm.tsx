import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/Components/ui/card"
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input"
import { Label } from "@/Components/ui/label";
import InputError from "@/Components/ui/InputError";

export default function DeleteUserForm() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Delete Account</CardTitle>
                <CardDescription>
                    Once your account is deleted, all of its resources and data will be permanently deleted. Before
                    deleting your account, please download any data or information that you wish to retain.
                </CardDescription>
            </CardHeader>
            <CardFooter>
                <Button variant={"destructive"}>DELETE ACCOUNT</Button>
            </CardFooter>
        </Card>
    )
}
