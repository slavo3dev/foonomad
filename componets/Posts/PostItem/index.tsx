import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import Image from "next/image";
import classes from "./postitem.module.css";

interface DateTimeFormatOptions { 
     localeMatcher?: string; 
     weekday?: string; 
     era?: string; 
     year?: string; 
     month?: string; 
     day?: string; 
     hour?: string; 
     minute?: string; 
     second?: string; 
     timeZoneName?: string; 
     formatMatcher?: string; 
     hour12?: boolean; 
     timeZone?: string; 
 } 

export function PostItem(props) {
	const { image, title, excerpt, date, slug } = props.post;

	const formatedDate = new Date(date).toLocaleDateString("en-US", {
		// date: "numeric",
		month: "long",
		year: "numeric",
	});

	const imagePath = `/images/posts/${slug}/${image}`;
	const linkPath = `/posts/${slug}`;

	return (
		<li className={classes.post}>
			<Link href={linkPath}>
				<a>
					<div className={classes.image}>
						<Image
							src={imagePath}
							alt={title}
							width={300}
							height={200}
							layout="responsive"
						/>
					</div>
					<div className={classes.content}>
						<h3>{title}</h3>
						<time>{formatedDate}</time>
						<p>{excerpt}</p>
					</div>
				</a>
			</Link>
		</li>
	);
}

PostItem.propTypes = {
	image: PropTypes.string,
	title: PropTypes.string,
	excerpt: PropTypes.string,
	date: PropTypes.string,
	slug: PropTypes.string,
};
