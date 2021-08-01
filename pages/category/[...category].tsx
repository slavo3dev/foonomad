import "semantic-ui-css/semantic.min.css";
import { contenfulData } from "../../utils/contentfulData";
import { useRouter } from "next/router";
import {  AllPosts } from "../../componetns";


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

export default function Category ( props: any )
{
	const {blogArticles} = props;
	const router = useRouter();
	const slugId = router?.query?.category[ 0 ] ;

	const categoryPosts = blogArticles.items.filter( (blog: any) => blog.fields.category.toLowerCase().replace( " ", "-" ) === slugId && blog );
	
	return <AllPosts posts={categoryPosts} />;
}