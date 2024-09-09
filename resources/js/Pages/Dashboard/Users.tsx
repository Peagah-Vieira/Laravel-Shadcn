import AuthRootLayout from "@/Layouts/AuthRootLayout";
import { Head } from '@inertiajs/react';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "@/Components/ui/breadcrumb";
import { UsersColumns } from "@/Layouts/Users/UsersColumns";
import { DataTable } from "@/Layouts/Table/DataTableLayout";
import { PageProps } from "@/types";
import { UserCreateDialog } from "@/Layouts/Users/UserCreateDialog";

export default function Users({ auth, users }: PageProps<{ users: [] }>) {
    return (
        <AuthRootLayout user={auth.user}>
            <Head title="Users" />
            <div className="flex items-center">
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink href={route('dashboard')}>Home</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbLink>Users</BreadcrumbLink>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            </div>
            <DataTable columns={UsersColumns} data={users} DialogComponent={UserCreateDialog} />
        </AuthRootLayout>
    )
}
