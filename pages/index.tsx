import Head from "next/head";
import PropTypes from "prop-types";
import { Fragment } from "react";
import { Hero, FeaturedPosts } from "../componets";
import { getFeaturedPosts } from "../lib/posts-util";
import { getFeaturedEvents } from "../dummy-data";
import { EventList } from "../componets";

export default function Home(props) {
	const { posts } = props;

	const featuredEvents = getFeaturedEvents();
	return (
		<Fragment>
			<Head>
				<title>NRG NOMAD - Software Web Development ] Digital Markting | ChatBot
          
				</title>
				<meta
					name="description"
					content="Digital Tools, WebSite Design and Remote LifeStyle"
				/>
			</Head>
			<Hero />
			<FeaturedPosts posts={posts} />
			<EventList items={featuredEvents} />
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
