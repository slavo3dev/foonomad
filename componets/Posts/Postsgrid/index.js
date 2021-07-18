import React from "react";
import PropTypes from "prop-types";
import { PostItem } from "../PostItem";
import classes from "./postsgrid.module.css";

export function PostsGrid(props) {
  const { posts } = props;

  return (
    <ul className={classes.grid}>
      {posts.map((post) => (
        <PostItem key={post.slug} post={post} />
      ))}
    </ul>
  );
}

PostsGrid.propTypes = {
  posts: PropTypes.array,
};
