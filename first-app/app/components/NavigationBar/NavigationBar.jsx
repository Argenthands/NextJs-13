import Link from 'next/link';
const Links = [
    { to: '/', label: 'Home' },
    { to: '/About', label: 'About' },
    { to: '/Contact', label: 'Contact' },
];
export function NavigationBar() {
    return (
        <nav>
            <ul>
                {Links.map(({ to, label }) => (
                    <li key={to}>
                        <Link href={to}>
                            {label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
