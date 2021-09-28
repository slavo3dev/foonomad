import "../styles/globals.css";
import "../styles/main.scss";
import "semantic-ui-css/semantic.min.css";
import type { AppProps /*, AppContext */ } from "next/app";
import { Footer, MainNavigation, HeadBasePage} from "../components";
import { Fragment } from "react";
import { useEffect } from "react";
import { useRouter } from "next/router";

import * as ga from "../lib/ga";

function MyApp ( { Component, pageProps }: AppProps )
{
	const router = useRouter();
  
	useEffect(() => {
		const handleRouteChange = (url: any) => {
			ga.pageview(url);
		};
		//When the component is mounted, subscribe to router changes
		//and log those page views
		router.events.on("routeChangeComplete", handleRouteChange);

		// If the component is unmounted, unsubscribe
		// from the event with the `off` method
		return () => {
			router.events.off("routeChangeComplete", handleRouteChange);
		};
	}, [router.events]);
	


	return (
		<Fragment>
			<HeadBasePage title="Software WEB Development / SEO / ChatBot- Home Page" />
			<div className="wallpaper animate__animated animate__fadeIn" data-image="images/miami.jpg"></div>
			<MainNavigation />
			<Component { ...pageProps } />
			<Footer />
		</Fragment>
	);
}

export default MyApp;
