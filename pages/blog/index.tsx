import { contenfulData } from "../../utils/contentfulData";
import "semantic-ui-css/semantic.min.css";
import { AllPosts, CategorySearch } from "../../components";
import { useRouter } from "next/router";




/* Props for Blog Article 
   {
		key: 1,
		titleHeader: "NRG DAY",
		category: "Wellness & Healthy",
		textDescription: "Spending a healthy day in these times is according to many people impossible, but we are here to change that. It doesn’t matter how you lived your life before, the important thing is how you will start a new day.",
		urlImage: "http://placekitten.com/200/100",
		extraDitails: extra
	},

*/


export async function getStaticProps ()
{

	const data = await contenfulData();

	return {
		props: {
			blogArticles: data
		}
	};
	
}

export default function Blog ( { blogArticles }: any ) 
{
 
	const router = useRouter();

	function findCategoryHandle ( category: string )
	{
		
		const fullPath = `/category/${category}`;

		router.push(fullPath);
	}

	const posts = blogArticles.items;

	return (
		<>
			<CategorySearch onSearch={findCategoryHandle} posts={posts} />
			<AllPosts posts={posts} />
		</>);
}