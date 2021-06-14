import "../styles/globals.css";
import type { AppProps /*, AppContext */ } from "next/app";
import { Footer, HeadComponent, BodyLayout } from "../componetns ";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<BodyLayout>
			<HeadComponent />
			<Component { ...pageProps } />
			<Footer />
		</BodyLayout>
	);
}

export default MyApp;
