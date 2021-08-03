import Head from "next/head";

export const HeadComponent= () =>
{
	return (
		<Head>
			<title>Software Web Development | ChatBot | SEO | Digital Marketing </title>
			<link rel="icon" href="/nrgnomad.svg" />
			<link href="https://fonts.googleapis.com/css2?family=Lobster&display=swap" rel="stylesheet" />
			<script
				async
				src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
			/>
			<script
				dangerouslySetInnerHTML={{
					__html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
				}}
			/>
		</Head>
	);
};