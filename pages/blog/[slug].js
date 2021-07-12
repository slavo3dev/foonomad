import { contenfulData } from "../../utils/contentfulData";
import "semantic-ui-css/semantic.min.css";
import ReactMarkdown from "react-markdown";
import { useRouter } from "next/router";

export async function getStaticProps ()
{

	const data = await contenfulData();

	return {
		props: {
			blogArticles: data
		}
	};
	
}

export const getStaticPaths = async () => {

	return {
		paths: [], //indicates that no page needs be created at build time
		fallback: "blocking" //indicates the type of fallback
	};
};

export default function blogPost(props) {
	
	const {blogArticles} = props;
	
	const router = useRouter();
	const slugId = router.query.slug;
	const blogArray = blogArticles.items;
	const postText = blogArray.map( post => post.fields.slug === slugId ? post.fields.postText :  "### No Post Items"
	);


	console.log("Blog Array: ". blogArray);
	console.log("ID: ",router.query.slug);
	console.log("Post Text: ", postText);
	
	const postComponents = blogArticles.items[0];
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
		<div>
			<h1>Blog Post</h1>
			<p> this is a text Blog post</p>
			<p>-----------------------------</p>
			<ReactMarkdown children={postText[0]} /> 
		</div>
	);
}


