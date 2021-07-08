import "../styles/globals.css";
import type { AppProps /*, AppContext */ } from "next/app";
import { Footer, HeadComponent, MainHeader } from "../componetns";
import {  Fragment } from "react";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Fragment>
		
			<HeadComponent />
			<MainHeader />
			<Component { ...pageProps } />
			<Footer />
	
		</Fragment>
	);
}

export default MyApp;
