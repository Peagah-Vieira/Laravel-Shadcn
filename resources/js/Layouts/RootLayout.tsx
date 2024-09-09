import { PropsWithChildren } from 'react';
import Sidebar from "@/Layouts/SideBarLayout";
import Navbar from "@/Layouts/NavbarLayout";
import { Toaster } from '@/Components/ui/toaster';

export default function RootLayout({ children }: PropsWithChildren) {
    return (
        <div>
            <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
                <Sidebar />
                <div className="flex flex-col">
                    <Navbar />
                    <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10">
                        {children}
                    </main>
                </div>
            </div>
            <Toaster />
        </div>
    );
}
