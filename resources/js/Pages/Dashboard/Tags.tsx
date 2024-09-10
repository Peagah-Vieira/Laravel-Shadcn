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
import { PageProps } from "@/types";
import { TagsColumns } from "@/Layouts/Tags/TagsColumns";
import { TagCreateDialog } from "@/Layouts/Tags/TagCreateDialog";

export default function Tags({ tags, auth }: PageProps<{ tags: [] }>) {
    return (
        <AuthRootLayout user={auth.user}>
            <Head title="Tags" />
            <div className="flex items-center">
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink href={route('dashboard')}>Home</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbLink>Tags</BreadcrumbLink>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            </div>
            <DataTable columns={TagsColumns} data={tags} DialogComponent={TagCreateDialog} />
        </AuthRootLayout>
    )
}
