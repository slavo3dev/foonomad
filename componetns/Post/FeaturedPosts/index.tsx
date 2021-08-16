import { ArticaleCard } from "../../ArticaleCard";
import { Container, Grid, Icon } from "semantic-ui-react";

export function FeaturedPosts ( { posts }: any) {
	const { blogArticles } = posts;
	const blogs = blogArticles.items;

	
	

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
		<>
			<h1 style={ { padding: "15px", textAlign: "center" } }>Featured Posts</h1>
			<Container style={ { display:"flex", justifyContent: "center", width: "80%", margin: "auto"}}>
				<Grid stackable columns={4} >
					<Grid.Row >
						{ blogs.map( ( blog: any ) =>
						{
							if ( blog.fields.isFeatured === "true" )
							{
								return	(
									<div style={ { padding: "5px" } } key={ blog.fields.slug }>
										<Grid.Column width={ 4 }>
											<ArticaleCard
												postUrl={ postUrl( blog.fields.slug ) }
												titleHeader={ blog.fields.title }
												description={ blog.fields.excerpt }
												urlImage={ blog.fields.featureImage.fields }
												extraInfo={ extra(blog.fields.timestamp) }
												category={ blog.fields.category } />
										</Grid.Column>
									</div>
								);
							} 
						}
						)
						}
					</Grid.Row>
				</Grid>
			</Container>
		</>);	
}

