import Head from "next/head";

export const HeadComponent= () =>
{
	return (
		<Head>
			<title>NRG DAY</title>
			<link rel="icon" href="/favicon.ico" />
			<script src="https://cdn.jsdelivr.net/npm/contentful@latest/dist/contentful.browser.min.js"></script>
		</Head>
	);
};