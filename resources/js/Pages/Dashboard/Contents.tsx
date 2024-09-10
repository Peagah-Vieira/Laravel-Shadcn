import AuthRootLayout from "@/Layouts/AuthRootLayout";
import { Head } from '@inertiajs/react';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "@/Components/ui/breadcrumb";
import { DataTable } from "@/Layouts/Table/DataTableLayout";
import { ContentsColumns } from "@/Layouts/Contents/ContentsColumns";
import { ContentCreateDialog } from "@/Layouts/Contents/ContentCreateDialog";
import { PageProps } from "@/types";

export default function Contents({ contents, auth }: PageProps<{ contents: [] }>) {
    return (
        <AuthRootLayout user={auth.user}>
            <Head title="Contents" />
            <div className="flex items-center">
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink href={route('dashboard')}>Home</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbLink>Contents</BreadcrumbLink>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            </div>
            <DataTable columns={ContentsColumns} data={contents} DialogComponent={ContentCreateDialog} />
        </AuthRootLayout>
    )
}
