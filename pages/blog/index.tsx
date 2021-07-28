import { contenfulData } from "../../utils/contentfulData";
import "semantic-ui-css/semantic.min.css";
import {  AllPosts } from "../../componetns";




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

export default function Blog ( props: any ) 
{
	return <AllPosts posts={props}/>;
}