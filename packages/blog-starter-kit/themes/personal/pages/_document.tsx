import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html lang="en" className="bg-custom font-roboto font-normal tracking-wide">
			<Head />
			<body className="bg-custom">
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
