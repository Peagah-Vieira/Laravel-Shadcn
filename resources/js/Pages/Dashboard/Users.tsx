import Sidebar from "@/Layouts/SideBarLayout";
import Navbar from "@/Layouts/NavbarLayout";
import { Head } from '@inertiajs/react';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "@/Components/ui/breadcrumb";
import { columns } from "@/Layouts/Users/Columns";
import { DataTable } from "@/Layouts/DataTable";
import { PageProps } from "@/types";

export default function Payments({ users }: PageProps<{ users: [] }>) {
    return (
        <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
            <Head title="Home" />
            <Sidebar />
            <div className="flex flex-col">
                <Navbar />
                <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
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
                    <DataTable columns={columns} data={users} />
                </main>
            </div>
        </div>
    )
}
