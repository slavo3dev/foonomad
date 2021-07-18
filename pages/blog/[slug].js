import { contenfulData } from "../../utils/contentfulData";
import "semantic-ui-css/semantic.min.css";
import ReactMarkdown from "react-markdown";
import {useRouter} from "next/router";
import { Container } from "semantic-ui-react";


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
	
	const article = blogArticles.items[0];
	console.log( "Blog Articles: ", blogArticles.items[ 0 ] );
	console.log( "----------------- BLOG -------------------" );
	console.log( "fileds: ", article.fields );
	console.log("Title: ", article.fields.title);
	console.log( "slug: ", article.fields.slug );
	console.log( "isFeatured: ", article.fields.isFeatured );
	console.log( "TimeStemp: ", article.fields.timestamp );
	console.log( "Category: ", article.fields.category );
	console.log( "Excerpt: ", article.fields.excerpt );
	console.log( "featureImage: ", article.fields.featureImage.fields );
	console.log( "blogImage: ", article.fields.blogImage.fields );
	console.log( "TextBlog Data: ", article.fields.textBlog.data );
	console.log( "TextBlog Content: ", article.fields.textBlog );
	console.log("------------------- End ------------------");
	
	return (
		<Container>
			<h2>{article.fields.title}</h2>
			<ReactMarkdown children={postText[0]} /> 
		</Container>
	);
}


