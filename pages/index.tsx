import "semantic-ui-css/semantic.min.css";
import { Container } from "semantic-ui-react";
import { ItemTemplate } from "../componetns ";
import { createClient } from "contentful";

const titleHeader = "NRG DAY";
const textDescription = "Spending a healthy day in these times is according to many people impossible, but we are here to change that. It doesn’t matter how you lived your life before, the important thing is how you will start a new day.";
const urlImage = "http://placekitten.com/200/100";
const extraDitails = "Following a healthy, active lifestyle doesn’t have to be complicated! Even the smallest adjustment to your routine can lead to big changes.";


export async function getStaticProps ()
{
	let data;

	const client = createClient({
		space: process.env.NEXT_PUBLIC_SPACE_ID || "",
		accessToken: process.env.NEXT_PUBLIC_ACCESS_TOKEN  || ""
	});

	try
	{
		data = await client
			.getEntries({
				content_type: "blog"
			});
	} catch ( err )
	{
		console.log("Error Message: ", err);
		data = { errorMsg: "Something Went Wrong, Please try again later!!!"};
	}
	

	return {
		props: {
			blogArticles: data
		}
	};
	
}

export default function Home (props: any)
{
	const { blogArticles } = props;

	
	console.log("Blog Articles: ", blogArticles.items[0]);

	
	return (
		<Container>
			<ItemTemplate titleHeader={titleHeader} description={textDescription} urlImage={urlImage} extraDitails={extraDitails }  />
		</Container>
	);
}


