import styles from "../styles/Home.module.css";
import "semantic-ui-css/semantic.min.css";
import { Container } from "semantic-ui-react";

export default function Home() {
	return (
		<Container>
			<div>
				<p className={ styles.title }>NRG DAY</p>
			</div>
			<p>
            Spending a healthy day in these times is according to many people impossible, but we are here to change that. It doesn’t matter how you lived your life before, the important thing is how you will start a new day.
			</p>
		</Container>
	);
}
