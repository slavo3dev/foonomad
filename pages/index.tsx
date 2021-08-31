import "semantic-ui-css/semantic.min.css";
import { contenfulData } from "../utils/contentfulData";
import { FeaturedPosts, Hero, HeadBasePage, MainNavigation, Footer} from "../componetns";



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
			<HeadBasePage title="Software WEB Development / SEO / ChatBot- Home Page" />
			<div className="wallpaper" data-image="images/miami.jpg"></div>
			<MainNavigation />
			<Hero />
			<FeaturedPosts posts={props} />
			<Footer />
		</>
	);
}


