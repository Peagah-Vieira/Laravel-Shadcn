import RootLayout from "@/Layouts/RootLayout";
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
import { UserDialog } from "@/Layouts/Users/UserDialog";

export default function Users({ users }: PageProps<{ users: [] }>) {
    return (
        <RootLayout>
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
            <DataTable columns={UsersColumns} data={users} DialogComponent={UserDialog} />
        </RootLayout>
    )
}
