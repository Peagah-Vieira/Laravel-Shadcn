import RootLayout from "@/Layouts/RootLayout";
import { Head } from '@inertiajs/react';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "@/Components/ui/breadcrumb";
import { DataTable } from "@/Layouts/Table/DataTableLayout";
import { CategoriesColumns } from "@/Layouts/Categories/CategoriesColumns";
import { CategoryCreateDialog } from "@/Layouts/Categories/CategoryCreateDialog";
import { PageProps } from "@/types";

export default function Categories({ categories }: PageProps<{ categories: [] }>) {
    return (
        <RootLayout>
            <Head title="Categories" />
            <div className="flex items-center">
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink href={route('dashboard')}>Home</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbLink>Categories</BreadcrumbLink>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            </div>
            <DataTable columns={CategoriesColumns} data={categories} DialogComponent={CategoryCreateDialog} />
        </RootLayout>
    )
}
