import "../styles/globals.css";
import type { AppProps /*, AppContext */ } from "next/app";
import { Fragment } from "react";
import { Footer, HeadComponent } from "../componetns ";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Fragment>
			<HeadComponent />
			<Component { ...pageProps } />
			<Footer />
		</Fragment>
	);
}

export default MyApp;
