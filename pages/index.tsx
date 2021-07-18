import Head from "next/head";
import PropTypes from "prop-types";
import { Fragment } from "react";
import { Hero, FeaturedPosts } from "../componets";
import { getFeaturedPosts } from "../lib/posts-util";

// Import EventList For Production
// import { getFeaturedEvents } from "../dummy-data";
// import { EventList } from "../componets";

export default function Home(props) {
	const { posts } = props;


	// Setup Events Fetaure 
	// const featuredEvents = getFeaturedEvents();
	return (
		<Fragment>
			<Head>
				<title>NRG NOMAD - Software Web Development ] Digital Markting | ChatBot
          
				</title>
				<meta
					name="description"
					content="Digital Tools, Software Web Development and Remote LifeStyle"
				/>
			</Head>
			<Hero />
			<FeaturedPosts posts={posts} />
		</Fragment>
	);
}

export function getStaticProps() {
	const featuredPosts = getFeaturedPosts();

	return {
		props: {
			posts: featuredPosts,
		},
	};
}

Home.propTypes = {
	props: PropTypes.object,
};
