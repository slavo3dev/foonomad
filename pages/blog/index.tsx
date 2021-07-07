import { contenfulData } from "../../utils/contentfulData";
import "semantic-ui-css/semantic.min.css";
import { Container, Grid, Icon} from "semantic-ui-react";
import { ArticaleCard } from "../../componetns";




const extra = (
	<a>
		<Icon name='book' />
    5 min read
	</a>
);
const arrayOfBlogs = [
	{
		titleHeader: "NRG DAY",
		category: "Wellness & Healthy",
		textDescription: "Spending a healthy day in these times is according to many people impossible, but we are here to change that. It doesn’t matter how you lived your life before, the important thing is how you will start a new day.",
		urlImage: "http://placekitten.com/200/100",
		extraDitails: extra
	},
	{
		titleHeader: "NRG LION",
		category: "Wellness & Healthy",
		textDescription : "Spending a healthy day in these times is according to many people impossible, but we are here to change that. It doesn’t matter how you lived your life before, the important thing is how you will start a new day.",
		urlImage : "http://placekitten.com/200/100",
		extraDitails : extra
	},
	{
		titleHeader: "NRG NOMAD",
		category: "Wellness & Healthy",
		textDescription: "Spending a healthy day in these times is according to many people impossible, but we are here to change that. It doesn’t matter how you lived your life before, the important thing is how you will start a new day.",
		urlImage: "http://placekitten.com/200/100",
		extraDitails: extra
	},
	{
		titleHeader: "NRG VAL",
		category: "Wellness & Healthy",
		textDescription: "Spending a healthy day in these times is according to many people impossible, but we are here to change that. It doesn’t matter how you lived your life before, the important thing is how you will start a new day.",
		urlImage: "http://placekitten.com/200/100",
		extraDitails: extra
	}, 
	{
		titleHeader: "PrototypeNext",
		category: "Wellness & Healthy",
		textDescription: "Spending a healthy day in these times is according to many people impossible, but we are here to change that. It doesn’t matter how you lived your life before, the important thing is how you will start a new day.",
		urlImage: "http://placekitten.com/200/100",
		extraDitails: extra
	}, 
	{
		titleHeader: "ReactLion",
		category: "Wellness & Healthy",
		textDescription: "Spending a healthy day in these times is according to many people impossible, but we are here to change that. It doesn’t matter how you lived your life before, the important thing is how you will start a new day.",
		urlImage: "http://placekitten.com/200/100",
		extraDitails: extra
	}, 
	{
		titleHeader: "Slavo3",
		category: "Wellness & Healthy",
		textDescription: "Spending a healthy day in these times is according to many people impossible, but we are here to change that. It doesn’t matter how you lived your life before, the important thing is how you will start a new day.",
		urlImage: "http://placekitten.com/200/100",
		extraDitails: extra
	}, 
];


export async function getStaticProps ()
{

	const data = await contenfulData();

	return {
		props: {
			blogArticles: data
		}
	};
	
}

export default function Blog (props: any) 
{
	const { blogArticles } = props;
	console.log("Blog Articles: ", blogArticles.items[0]);
    
	return (
		<Container>
			<h1>Articles</h1>
			<Grid stackable>
				<Grid.Row>
					{
						arrayOfBlogs.map( ( post ) => (
							<Grid.Column width={ 4 }>
								<ArticaleCard 
									key={ post.titleHeader }
									titleHeader={ post.titleHeader }
									description={ post.textDescription }
									urlImage={ post.urlImage }
									extraInfo={ post.extraDitails }
									category= { post.category}/>
							</Grid.Column>
						)
						)
					}
				</Grid.Row>
			</Grid>
		</Container>
	);
}