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

export default function UpdateProfileInformationForm() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Profile Information</CardTitle>
                <CardDescription>
                    Update your account's profile information and email address.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form className="flex flex-col gap-4">
                    <div>
                        <Label htmlFor="name">Name</Label>
                        <Input
                            id="name"
                            className="mt-1 block w-full"
                            required
                        />
                        <InputError className="mt-2" />
                    </div>
                    <div>
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            type="email"
                            className="mt-1 block w-full"
                        />
                        <InputError className="mt-2" />
                    </div>
                </form>
            </CardContent>
            <CardFooter className="border-t px-6 py-4">
                <Button>Save</Button>
            </CardFooter>
        </Card>
    )
}
