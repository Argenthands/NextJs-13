import styles from "./NavigationBar.module.css";
import Link from 'next/link';
const Links = [
    { to: '/', label: 'Home' },
    { to: '/About', label: 'About' },
    { to: '/Contact', label: 'Contact' },
];
export function NavigationBar() {
    return (
        <nav className={styles.NavigationBar}>
            <ul className={styles.NavigationElements}>
                {Links.map(({ to, label }) => (
                    <li className={styles.NavigationLink} key={to}>
                        <Link href={to}>
                            {label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
