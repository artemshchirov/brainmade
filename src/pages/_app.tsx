import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps): JSX.Element {
	return (
		<>
			<Head>
				<title>Brainmade WebStudio</title>
				<link rel='icon' href='/favicon.ico'></link>
			</Head>
			<Component {...pageProps} />
		</>
	);
}
