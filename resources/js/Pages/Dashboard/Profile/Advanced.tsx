import AuthRootLayout from "@/Layouts/AuthRootLayout";
import { Head } from '@inertiajs/react';
import ProfileNavbar from "./Partials/Navbar";
import DeleteUserForm from "./Partials/DeleteUserForm";
import { PageProps } from "@/types";
import { ProfileBreadcrumb } from "./Partials/ProfileBreadcrumb";

export default function ProfileAdvanced({ auth }: PageProps) {
    return (
        <AuthRootLayout user={auth.user}>
            <Head title="Profile" />
            <div className="flex items-center">
                <ProfileBreadcrumb PageName="Advanced" />
            </div>
            <div className="grid w-full max-w-6xl items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]">
                <ProfileNavbar />
                <div className="grid gap-6">
                    <DeleteUserForm />
                </div>
            </div>
        </AuthRootLayout>
    )
}
