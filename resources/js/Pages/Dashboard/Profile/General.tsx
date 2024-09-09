import RootLayout from "@/Layouts/RootLayout";
import { Head } from '@inertiajs/react';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "@/Components/ui/breadcrumb";
import ProfileNavbar from "./Partials/Navbar";
import UpdateProfileInformationForm from "./Partials/UpdateProfileInformationForm";
import UpdatePasswordForm from "./Partials/UpdatePasswordForm";

export default function ProfileGeneral() {
    return (
        <RootLayout>
            <Head title="Profile" />
            <div className="flex items-center">
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink href={route('dashboard')}>Home</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbLink href={route('profile')}>Profile</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbLink>General</BreadcrumbLink>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            </div>
            <div className="grid w-full max-w-6xl items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]">
                <ProfileNavbar />
                <div className="grid gap-6">
                    <UpdateProfileInformationForm />
                </div>
            </div>
        </RootLayout>
    )
}
