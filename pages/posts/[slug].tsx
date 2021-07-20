import { PostContent } from "../../componets";
import { getPostData, getPostsFiles } from "../../lib/posts-util";
import Head from "next/head";
import { Fragment } from "react";

export default function PostPage(props) {
	const { post } = props;
	return (
		<Fragment>
			<Head>
				<title>{post.title}</title>
				<meta name="discription" content={post.excerpt} />
			</Head>
			<PostContent post={post} />
		</Fragment>
	);
}

export function getStaticProps(context) {
	const { params } = context;
	const { slug } = params;

	const postData = getPostData(slug);

	return {
		props: {
			post: postData,
		},
		revalidate: 600,
	};
}

export function getStaticPaths() {
	const postFileNames = getPostsFiles();
	const slugs = postFileNames.map((fileName) =>
		fileName.replace(/\.md$/, ""),
	);
	return {
		paths: slugs.map((slug) => ({ params: { slug: slug } })),
		fallback: false,
	};
}
