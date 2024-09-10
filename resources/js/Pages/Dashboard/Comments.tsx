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
import { CommentsColumns } from "@/Layouts/Comments/CommentsColumns";
import { CommentCreateDialog } from "@/Layouts/Comments/CommentCreateDialog";

export default function Comments({ comments, auth }: PageProps<{ comments: [] }>) {
    return (
        <AuthRootLayout user={auth.user}>
            <Head title="Comments" />
            <div className="flex items-center">
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink href={route('dashboard')}>Home</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbLink>Comments</BreadcrumbLink>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            </div>
            <DataTable columns={CommentsColumns} data={comments} DialogComponent={CommentCreateDialog} />
        </AuthRootLayout>
    )
}
