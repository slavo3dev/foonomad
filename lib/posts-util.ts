import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postPathDirectory = path.join(process.cwd(), "articles");

export function getPostsFiles() {
	const postFiles = fs.readdirSync(postPathDirectory);
	return postFiles;
}

export function getPostData(postIdentifier) {
	const postSlug = postIdentifier.replace(/\.md$/, ""); // remove the file extesion
	const filePath = path.join(postPathDirectory, `${postSlug}.md`);
	const fileContent = fs.readFileSync(filePath, "utf-8");
	const { data, content } = matter(fileContent);

	const postsData = {
		slug: postSlug,
		...data,
		content,
	};

	return postsData;
}

export function getAllPosts() {
	const postFiles = getPostsFiles();
	const allPosts = postFiles.map((postFile) => {
		return getPostData(postFile);
	});

	const sortedPosts = allPosts.sort((postA: any, postB: any) =>
		postA.date > postB.date ? -1 : 1,
	);

	return sortedPosts;
}

export function getFeaturedPosts() {
	const allPosts = getAllPosts();

	const featuredPosts = allPosts.filter((post: any) => post.isFeatured);

	return featuredPosts;
}
