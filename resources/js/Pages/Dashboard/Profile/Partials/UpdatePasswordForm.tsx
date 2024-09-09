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

export default function UpdatePasswordForm() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Update Password</CardTitle>
                <CardDescription>
                    Ensure your account is using a long, random password to stay secure.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form className="flex flex-col gap-4">
                    <div>
                        <Label htmlFor="current_password">Current Password</Label>
                        <Input
                            id="current_password"
                            type="password"
                            className="block w-full"
                            autoComplete="current-password"
                        />
                        <InputError className="mt-2" />
                    </div>
                    <div>
                        <Label htmlFor="password">New Password</Label>
                        <Input
                            id="password"
                            type="password"
                            className="mt-1 block w-full"
                            autoComplete="new-password"
                        />
                        <InputError className="mt-2" />
                    </div>
                    <div>
                        <Label htmlFor="password_confirmation">Confirm Password</Label>
                        <Input
                            id="password_confirmation"
                            type="password"
                            className="mt-1 block w-full"
                            autoComplete="new-password"
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
