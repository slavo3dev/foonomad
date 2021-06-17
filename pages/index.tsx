import styles from "../styles/Home.module.css";
import "semantic-ui-css/semantic.min.css";
import { Container } from "semantic-ui-react";
import { ItemTemplate } from "../componetns ";


const titleHeader = "NRG DAY";
const textDescription = "Spending a healthy day in these times is according to many people impossible, but we are here to change that. It doesn’t matter how you lived your life before, the important thing is how you will start a new day.";
const urlImage = "http://placekitten.com/200/300";
const extraDitails = "Following a healthy, active lifestyle doesn’t have to be complicated! Even the smallest adjustment to your routine can lead to big changes."; 


export default function Home ()
{
	return (
		<Container>
			<ItemTemplate titleHeader={titleHeader} description={textDescription} urlImage={urlImage} extraDitails={extraDitails }  />
		</Container>
	);
}
