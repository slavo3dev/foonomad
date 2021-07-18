import PropTypes from "prop-types";
import classes from "./featuredposts.module.css";
import { PostsGrid } from "../index";

export function FeaturedPosts(props) {
  const { posts } = props;
  return (
    <section className={classes.latest}>
      <h2>Featured Posts</h2>
      <PostsGrid posts={posts} />
    </section>
  );
}

FeaturedPosts.propTypes = {
  posts: PropTypes.array,
};
