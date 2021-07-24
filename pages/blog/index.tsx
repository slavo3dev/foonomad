import { contenfulData } from "../../utils/contentfulData";
import "semantic-ui-css/semantic.min.css";
import { Container, Grid, Icon} from "semantic-ui-react";
import { ArticaleCard } from "../../componetns";



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
	const { blogArticles } = props;
	const blogs = blogArticles.items;

	console.log( "BLOGS: ", blogs );
	

	const postUrl = ( slug: string ) =>
	{
		return `/blog/${ slug }`;
	};

	const extra = ( date: string ) =>
	{
		const formatedDate = new Date(date).toLocaleDateString("en-US", {
			day: "numeric",
			month: "long",
			year: "numeric",
		});
		return 	(
			<>
				<p><Icon name='book' />5 min read</p>
				<time><Icon name="calendar alternate outline" />{ formatedDate }</time>
			</>
		);
	};
    
	return (
		<Container>
			<h1>Articles</h1>
			<Grid stackable>
				<Grid.Row >
					{ blogs.map( ( blog: any ) => (
						<ArticaleCard
							key={blog.fields.slug }
							postUrl={ postUrl( blog.fields.slug ) }
							titleHeader={ blog.fields.title }
							description={ blog.fields.excerpt }
							urlImage={ blog.fields.featureImage.fields }
							extraInfo={ extra(blog.fields.timestamp) }
							category={ blog.fields.category } />
					)
					)
					}
				</Grid.Row>
			</Grid>
		</Container>);	
}