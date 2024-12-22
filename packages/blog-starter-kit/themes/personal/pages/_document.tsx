import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html lang="en" className="font-inter">
			{/* Umami analytics */}
			<script
          		defer
          		src="https://cloud.umami.is/script.js"
          		data-website-id="da51ba08-993d-4506-bb5c-7ddb5f66e7c6">
        	</script>
			
			<Head />
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
