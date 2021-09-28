
import {Image} from "semantic-ui-react";
import classes from "./postheader.module.css";

interface Props
{
    imageDescription: string;
    imagePath: string;
  imageTitle: string;
}

export function PostHeader(props: Props ) {
	const { imageTitle, imagePath, imageDescription } = props;
  
	return (

		<header className={classes.header}>
			<h1>{imageTitle}</h1>
			<Image src={imagePath} alt={imageDescription} />
		</header>
	);
}


