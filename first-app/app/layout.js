import "../styles/globals.css";
import { Header } from "./components/Header/Header"
export default function RootLayout({ children }) {
	return (
		<html>
			<head>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<title>My First App</title>
			</head>
			<body>
				<Header />
				{children}
			</body>
		</html>
	)
}
