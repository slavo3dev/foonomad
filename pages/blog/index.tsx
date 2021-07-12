import { contenfulData } from "../../utils/contentfulData";
import "semantic-ui-css/semantic.min.css";
import { Container, Grid, Icon} from "semantic-ui-react";
import { ArticaleCard } from "../../componetns";
import Link from "next/link";



const extra = (
	<a>
		<Icon name='book' />
    5 min read
	</a>
);
const arrayOfBlogs = [
	{
		key: 1,
		titleHeader: "NRG DAY",
		category: "Wellness & Healthy",
		textDescription: "Spending a healthy day in these times is according to many people impossible, but we are here to change that. It doesn’t matter how you lived your life before, the important thing is how you will start a new day.",
		urlImage: "http://placekitten.com/200/100",
		extraDitails: extra
	},
	{
		key: 2,
		titleHeader: "NRG LION",
		category: "Wellness & Healthy",
		textDescription : "Spending a healthy day in these times is according to many people impossible, but we are here to change that. It doesn’t matter how you lived your life before, the important thing is how you will start a new day.",
		urlImage : "http://placekitten.com/200/100",
		extraDitails : extra
	},
	{
		key: 3,
		titleHeader: "NRG NOMAD",
		category: "Wellness & Healthy",
		textDescription: "Spending a healthy day in these times is according to many people impossible, but we are here to change that. It doesn’t matter how you lived your life before, the important thing is how you will start a new day.",
		urlImage: "http://placekitten.com/200/100",
		extraDitails: extra
	},
	{
		key: 4,
		titleHeader: "NRG VAL",
		category: "Wellness & Healthy",
		textDescription: "Spending a healthy day in these times is according to many people impossible, but we are here to change that. It doesn’t matter how you lived your life before, the important thing is how you will start a new day.",
		urlImage: "http://placekitten.com/200/100",
		extraDitails: extra
	}, 
	{
		key: 5,
		titleHeader: "PrototypeNext",
		category: "Wellness & Healthy",
		textDescription: "Spending a healthy day in these times is according to many people impossible, but we are here to change that. It doesn’t matter how you lived your life before, the important thing is how you will start a new day.",
		urlImage: "http://placekitten.com/200/100",
		extraDitails: extra
	}, 
	{
		key: 7,
		titleHeader: "ReactLion",
		category: "Wellness & Healthy",
		textDescription: "Spending a healthy day in these times is according to many people impossible, but we are here to change that. It doesn’t matter how you lived your life before, the important thing is how you will start a new day.",
		urlImage: "http://placekitten.com/200/100",
		extraDitails: extra
	}, 
	{
		key: 8,
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
	const postComponents = blogArticles.items[ 0 ];
	console.log( "Blog Articles: ", blogArticles.items[ 0 ] );
	console.log( "----------------- BLOG -------------------" );
	console.log( "fileds: ", postComponents.fields );
	console.log("Title: ", postComponents.fields.title);
	console.log( "slug: ", postComponents.fields.slug );
	console.log( "isFeatured: ", postComponents.fields.isFeatured );
	console.log( "TimeStemp: ", postComponents.fields.timestamp );
	console.log( "Category: ", postComponents.fields.category );
	console.log( "Excerpt: ", postComponents.fields.excerpt );
	console.log( "featureImage: ", postComponents.fields.featureImage.fields );
	console.log( "blogImage: ", postComponents.fields.blogImage.fields );
	console.log( "TextBlog Data: ", postComponents.fields.textBlog.data );
	console.log( "TextBlog Content: ", postComponents.fields.textBlog );
	console.log("------------------- End ------------------");
    
	return (
		<Container>
			<h1>Articles</h1>
			<Grid stackable>
				<Grid.Row>
					{ arrayOfBlogs.map( ( post ) => (
						<Link href="/blog/remote-business-ideas">
							<Grid.Column width={ 4 } style={{ border: "1px solid red"}}>
								<ArticaleCard 
									key={post.key + Math.random()}
									titleHeader={ post.titleHeader }
									description={ post.textDescription }
									urlImage={ post.urlImage }
									extraInfo={ post.extraDitails }
									category= { post.category}/>
							</Grid.Column>
						</Link>
					)
					)
					}
				</Grid.Row>
			</Grid>
		</Container>
	);
}