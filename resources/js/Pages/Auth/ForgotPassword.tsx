import GuestRootLayout from '@/Layouts/GuestRootLayout';
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import InputError from "@/Components/ui/InputError";
import { Label } from "@/Components/ui/label";
import { FormEventHandler } from 'react';
import { Head, useForm } from '@inertiajs/react';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/Components/ui/card";

export default function ForgotPassword({ status }: { status?: string }) {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('password.email'));
    };

    return (
        <GuestRootLayout>
            <Head title="Forgot Password" />
            <form onSubmit={submit}>
                <Card className="mx-auto max-w-sm">
                    <CardHeader>
                        <CardTitle className="text-xl">Forgot Password</CardTitle>
                        <CardDescription>
                            Forgot your password? No problem. Just let us know your email address and we will email you a password
                            reset link that will allow you to choose a new one.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="grid gap-4">
                            <div className="grid gap-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    name="email"
                                    value={data.email}
                                    autoComplete="email"
                                    onChange={(e) => setData('email', e.target.value)}
                                    placeholder="m@example.com"
                                    required
                                />
                                <InputError message={errors.email} className="mt-2" />
                            </div>
                            <Button type="submit" className="w-full" disabled={processing}>
                                Email Password Reset Link
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </form>
        </GuestRootLayout>
    )
}
