import {
	Meta,
	Links,
	Outlet,
	Scripts,
	LiveReload,
	useRouteError,
	isRouteErrorResponse,
	Link
} from '@remix-run/react'
import styles from '@/styles/index.css'
import Header from '@/components/header'
import Footer from './components/footer'

export function meta() {
	return [
		{ charset: 'utf-8' },
		{ title: 'GuitarLA - Remix' },
		{ name: 'viewport', content: 'width=device-width, initial-scale=1' }
	]
}

export function links() {
	return [
		{
			rel: 'stylesheet',
			href: 'https://necolas.github.io/normalize.css/8.0.1/normalize.css'
		},
		{
			rel: 'preconnect',
			href: 'https://fonts.googleapis.com'
		},
		{
			rel: 'preconnect',
			href: 'https://fonts.gstatic.com',
			crossOrigin: 'true'
		},
		{
			rel: 'stylesheet',
			href: 'https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap'
		},
		{
			rel: 'stylesheet',
			href: styles
		}
	]
}

export default function App() {
	return (
		<Document>
			<Outlet />
		</Document>
	)
}

function Document({ children }) {
	return (
		<html lang="en">
			<head>
				<Meta />
				<Links />
			</head>
			<body>
				<Header />
				<div className="main-content">{children}</div>
				<Footer />

				<Scripts />
				<LiveReload />
			</body>
		</html>
	)
}

// Error handling
export function ErrorBoundary() {
	const error = useRouteError()

	if (isRouteErrorResponse(error)) {
		return (
			<Document>
				<div className="error">
					<h1>
						{error.status} {error.statusText}
					</h1>
					<p>{error.data}</p>
					<Link to={-1} className="error-enlace">
						Volver
					</Link>
				</div>
			</Document>
		)
	} else if (error instanceof Error) {
		return (
			<Document>
				<div className="error">
					<h1>Error</h1>
					<p>{error.message}</p>
					<p>The stack trace is:</p>
					<pre>{error.stack}</pre>
					<Link to={-1} className="error-enlace">
						Volver
					</Link>
				</div>
			</Document>
		)
	} else {
		return (
			<Document>
				<div className="error">
					<h1>Unknown Error</h1>
					<Link to={-1} className="error-enlace">
						Volver
					</Link>
				</div>
			</Document>
		)
	}
}
