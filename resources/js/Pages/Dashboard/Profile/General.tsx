import AuthRootLayout from "@/Layouts/AuthRootLayout";
import { Head } from '@inertiajs/react';
import ProfileNavbar from "./Partials/Navbar";
import UpdateProfileInformationForm from "./Partials/UpdateProfileInformationForm";
import { PageProps } from "@/types";
import { ProfileBreadcrumb } from "./Partials/ProfileBreadcrumb";

export default function ProfileGeneral({ auth, mustVerifyEmail, status }: PageProps<{ mustVerifyEmail: boolean, status?: string }>) {
    return (
        <AuthRootLayout user={auth.user}>
            <Head title="Profile" />
            <div className="flex items-center">
                <ProfileBreadcrumb PageName="General" />
            </div>
            <div className="grid w-full max-w-6xl items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]">
                <ProfileNavbar />
                <div className="grid gap-6">
                    <UpdateProfileInformationForm mustVerifyEmail={mustVerifyEmail}
                        status={status} />
                </div>
            </div>
        </AuthRootLayout>
    )
}
