import "../styles/globals.css";
import type { AppProps /*, AppContext */ } from "next/app";
import { Footer, HeadComponent, MainNavigation } from "../componetns";
import {  Fragment } from "react";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Fragment>
			<HeadComponent />
			<MainNavigation />
			<Component { ...pageProps } />
			<Footer />
		</Fragment>
	);
}

export default MyApp;
