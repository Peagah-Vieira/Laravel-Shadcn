import GuestRootLayout from '@/Layouts/GuestRootLayout';
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import InputError from "@/Components/ui/InputError";
import { Label } from "@/Components/ui/label";
import Checkbox from '@/Components/Checkbox';
import { Head, Link, useForm } from '@inertiajs/react';
import { FormEventHandler } from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/Components/ui/card";

export default function Login({ status, canResetPassword }: { status?: string, canResetPassword?: boolean }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <GuestRootLayout>
            <Head title="Login" />

            {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}

            <form onSubmit={submit}>
                <Card className="mx-auto max-w-sm">
                    <CardHeader>
                        <CardTitle className="text-2xl">Login</CardTitle>
                        <CardDescription>
                            Enter your email below to login to your account
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
                            <div className="grid gap-2">
                                <Label htmlFor="password">Password</Label>
                                <Input
                                    id="password"
                                    type="password"
                                    name="password"
                                    value={data.password}
                                    autoComplete="current-password"
                                    onChange={(e) => setData('password', e.target.value)}
                                    required />
                                <InputError message={errors.password} className="mt-2" />
                            </div>
                            <div className="block">
                                <div className="flex items-center">
                                    <label className="flex items-center">
                                        <Checkbox
                                            name="remember"
                                            checked={data.remember}
                                            onChange={(e) => setData('remember', e.target.checked)}
                                        />
                                        <span className="ms-2 text-sm text-gray-600 dark:text-gray-400">Remember me</span>
                                    </label>
                                    <Link href={route('password.request')} className="ml-auto inline-block text-sm underline">
                                        Forgot your password?
                                    </Link>
                                </div>
                            </div>
                            <Button type="submit" className="w-full" disabled={processing}>
                                Login
                            </Button>
                        </div>
                        <div className="mt-4 text-center text-sm">
                            Don&apos;t have an account?{" "}
                            <Link href={route('register')} className="underline">
                                Sign up
                            </Link>
                        </div>
                    </CardContent>
                </Card>
            </form>
        </GuestRootLayout>
    )
}
