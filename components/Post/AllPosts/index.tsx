import { ArticaleCard } from "../../ArticaleCard";
import { Container, Grid, Icon } from "semantic-ui-react";



export function AllPosts ( { posts }: any )
{
		
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
			<Grid stackable>
				<Grid.Row >
					{ posts.map( ( post: any ) => (
						<div style={{ padding: "5px"}} key={post.fields.slug }>
							<ArticaleCard
								postUrl={ postUrl( post.fields.slug ) }
								titleHeader={ post.fields.title }
								description={ post.fields.excerpt }
								urlImage={ post.fields.featureImage.fields }
								extraInfo={ extra(post.fields.timestamp) }
								category={ post.fields.category } />
						</div>	
					)
					)
					}
				</Grid.Row>
			</Grid>
		</Container>);	
} 