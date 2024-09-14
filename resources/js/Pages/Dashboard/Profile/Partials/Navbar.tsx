import { Link, usePage } from "@inertiajs/react";

export default function ProfileNavbar() {
    const { url } = usePage()
    return (
        <nav className="grid gap-4 text-sm text-muted-foreground">
            <Link href={route('profile')} className={url === '/dashboard/profile' ? 'font-semibold text-primary' : 'transition-all hover:text-primary'}>
                General
            </Link>
            <Link href={route('profile.security')} className={url === '/dashboard/profile/security' ? 'font-semibold text-primary' : 'transition-all hover:text-primary'}>Security</Link>
            <Link href={route('profile.advanced')} className={url === '/dashboard/profile/advanced' ? 'font-semibold text-primary' : 'transition-all hover:text-primary'}>Advanced</Link>
        </nav>
    )
}
