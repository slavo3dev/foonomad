import { ArticaleCard } from "../../ArticaleCard";
import { Container, Grid, Icon } from "semantic-ui-react";


export function AllPosts ( { posts }: any )
{

	const { blogArticles } = posts;
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