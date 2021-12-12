import "semantic-ui-css/semantic.min.css";
import { contenfulData } from "../utils/contentfulData";
import { FeaturedPosts, Hero, Marketplace } from "@components";



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
		<>
			<Hero />
			<FeaturedPosts posts={ props } />
		</>
	);
}


