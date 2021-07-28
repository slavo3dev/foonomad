import { contenfulData } from "../../utils/contentfulData";
import "semantic-ui-css/semantic.min.css";
import {useRouter} from "next/router";
import {Container} from "semantic-ui-react";
import { PostContent } from "../../componetns";

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
	const postText = blogArray.map( ( post: any) => post.fields.slug === slugId ? post.fields.postText :  "### No Post Items"
	);

	const article = blogArticles.items[0];

	const imagePath = article.fields.blogImage.fields.file.url;
	const imageTitle = article.fields.blogImage.fields.title;
	const imageDescription = article.fields.blogImage.fields.description;

	return (
		<Container>
			<PostContent 
				content={postText[0]}
				imagePath={imagePath} 
				imageTitle={imageTitle}
				imageDescription={imageDescription}
			/>
		</Container>
	);
}


