import { Link } from "@inertiajs/react";

export default function ProfileNavbar() {
    return (
        <nav className="grid gap-4 text-sm text-muted-foreground">
            <Link href={route('profile')}>
                General
            </Link>
            <Link href={route('profile.security')}>Security</Link>
            <Link href={route('profile.advanced')}>Advanced</Link>
        </nav>
    )
}
