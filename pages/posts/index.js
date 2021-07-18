import { AllPosts } from "../../componets";
import { getAllPosts } from "../../lib/posts-util";
import PropTypes from "prop-types";
import { Fragment } from "react";
import Head from "next/head";
export default function AllPostPage(props) {
  const { posts } = props;

  return (
    <Fragment>
      <Head>
        <title>Welcome to my Blog</title>
        <meta
          name="description"
          content="Digital Tools for Remote Business Articales"
        />
      </Head>
      <AllPosts posts={posts} />
    </Fragment>
  );
}

export function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
}

AllPostPage.propTypes = {
  props: PropTypes.object,
  posts: PropTypes.array,
};
