import "../styles/globals.css";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header"
export default function RootLayout({ children }) {
	return (
		<html>
			<head>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<title>First next.js 13 app</title>
			</head>
			<body>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	)
}
