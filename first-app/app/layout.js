import Link from 'next/link'

const Links = [
	{ to: '/', label: 'Home' },
	{ to: '/About', label: 'About' },
	{ to: '/Contact', label: 'Contact' }
]
export default function RootLayout({ children }) {
	return (
		<html>
			<head>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<title>My First App</title>
			</head>
			<body>
				<header>
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
				</header>
				{children}
			</body>
		</html>
	)
}
