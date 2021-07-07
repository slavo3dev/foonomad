import "semantic-ui-css/semantic.min.css";
import { Container } from "semantic-ui-react";
import { contenfulData } from "../utils/contentfulData";


export async function getStaticProps ()
{
	const data = await contenfulData();

	return {
		props: {
			blogArticles: data
		}
	};
	
}

export default function Home (props: any)
{
	
	return (
		<Container>
			<h1>Home Page</h1>
		</Container>
	);
}


