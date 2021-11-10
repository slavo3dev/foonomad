import { contenfulData } from "../../utils/contentfulData";
import "semantic-ui-css/semantic.min.css";
import {useRouter} from "next/router";
import {Container} from "semantic-ui-react";
import { PostContent } from "../../components";

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

export default function blogPost(props: any) {
	
	const {blogArticles} = props;
	
	const router = useRouter();
	const slugId = router.query.slug;
	const blogArray = blogArticles.items;

	// Filter To find Article
	const postContentArray = blogArray.filter( ( post: any ) => post.fields.slug.includes( slugId ) );

	// Article Data
	const article = postContentArray[ 0 ];
	const postArticle = article.fields.postText;
	const imagePath = article.fields.blogImage.fields.file.url;
	const imageTitle = article.fields.blogImage.fields.title;
	const imageDescription = article.fields.blogImage.fields.description;

	return (
		<Container>
			<PostContent 
				content={postArticle}
				imagePath={imagePath} 
				imageTitle={imageTitle}
				imageDescription={imageDescription}
			/>
		</Container>
	);
}


