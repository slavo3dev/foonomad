import Document, { Html, Main, NextScript } from "next/document";
import { HeadComponent } from "../componetns";

export default class MyDocument extends Document {
	render() {
		return (
			<Html>
				<HeadComponent />
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}