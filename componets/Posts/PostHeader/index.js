import PropTypes from "prop-types";
import Image from "next/image";
import classes from "./postheader.module.css";

export function PostHeader(props) {
  const { title, image } = props;

  const imagePath = `/images/posts/${image}/${image}`;
  return (
    <header className={classes.header}>
      <h1>{title}</h1>
      <Image src={image} alt={title} width={200} height={150} />
    </header>
  );
}

PostHeader.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
};
