import Image from "next/image";
import classes from "./hero.module.css";
import Link from "next/link";
import { Button } from "semantic-ui-react";

export function Hero() {
	return (
		<section className={ classes.hero }>
			<div className={classes.image}>
				<Image
					className="animate__animated animate__fadeIn profile-image-hero"
					src="/assets/images/profile/profile.png"
					alt="Profile Image, Software Developer"
					width={300}
					height={300}
				/>
			</div>
			<h1>foo(Nomad)</h1>
			<p className={classes.quote}>The future depends on what<br /> you do today.</p>
			<Link href="/blog"><a><Button style={ { margin: "10px" } } size='big' inverted >Articles</Button></a></Link>
		</section>
	
	);
}