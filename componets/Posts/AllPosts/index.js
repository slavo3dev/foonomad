import { PostsGrid } from "../Postsgrid";
import classes from "./allposts.module.css";
import PropTypes from "prop-types";

export function AllPosts(props) {
  const { posts } = props;
  return (
    <section className={classes.posts}>
      <h1>All Posts</h1>
      <PostsGrid posts={posts} />
    </section>
  );
}

AllPosts.propTypes = {
  posts: PropTypes.array,
};
