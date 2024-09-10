import { Sheet, SheetContent, SheetTrigger } from "@/Components/ui/sheet";
import { Link } from "@inertiajs/react";
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu";
import {
    faHouse,
    faCube,
    faUsers,
    faTags,
    faCopy,
    faComments,
    faRocket,
    faBars,
    faMagnifyingGlass
} from '@fortawesome/free-solid-svg-icons';
import { faCircleUser } from '@fortawesome/free-regular-svg-icons';
import { ModeToggle } from "@/Components/ui/mode-toggle";

export default function Navbar() {
    const appName = import.meta.env.VITE_APP_NAME;

    return (
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
            <Sheet>
                <SheetTrigger asChild>
                    <Button
                        variant="outline"
                        size="icon"
                        className="shrink-0 md:hidden"
                    >
                        <FontAwesomeIcon icon={faBars as IconProp} />
                        <span className="sr-only">Toggle navigation menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="left" className="flex flex-col">
                    <nav className="grid gap-2 text-lg font-medium">
                        <Link
                            href={route('dashboard')}
                            className="flex items-center gap-2 text-lg font-semibold"
                        >
                            <FontAwesomeIcon icon={faRocket as IconProp} size="xl" />
                            <span>{appName}</span>
                        </Link>
                        <Link href={route('dashboard')} className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground">
                            <FontAwesomeIcon icon={faHouse as IconProp} />
                            Home
                        </Link>
                        <Link href={route('dashboard.users')} className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground">
                            <FontAwesomeIcon icon={faUsers as IconProp} />
                            Users
                        </Link>
                        <Link href={route('dashboard.categories')} className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground">
                            <FontAwesomeIcon icon={faCube as IconProp} />
                            Categories
                        </Link>
                        <Link href={route('dashboard.contents')} className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground">
                            <FontAwesomeIcon icon={faCopy as IconProp} />
                            Contents
                        </Link>
                        <Link href="#" className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground">
                            <FontAwesomeIcon icon={faTags as IconProp} />
                            Tags
                        </Link>
                        <Link href="#" className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground">
                            <FontAwesomeIcon icon={faComments as IconProp} />
                            Comments
                        </Link>
                    </nav>
                </SheetContent>
            </Sheet>
            <div className="w-full flex-1">
                <form>
                    <div className="relative">
                        <FontAwesomeIcon icon={faMagnifyingGlass as IconProp} className="absolute left-2.5 top-2.5 text-muted-foreground" />
                        <Input
                            type="search"
                            placeholder="Search products..."
                            className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
                        />
                    </div>
                </form>
            </div>
            <ModeToggle />
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="secondary" size="icon" className="rounded-full">
                        <FontAwesomeIcon icon={faCircleUser as IconProp} size="xl" />
                        <span className="sr-only">Toggle user menu</span>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <Link href={route('profile')} className="relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm focus:bg-accent text-muted-foreground hover:text-foreground">
                        Profile
                    </Link>
                    <DropdownMenuSeparator />
                    <Link href={route('logout')} method="post" className="relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm focus:bg-accent text-muted-foreground hover:text-foreground">
                        Logout
                    </Link>
                </DropdownMenuContent>
            </DropdownMenu>
        </header>
    )
}
