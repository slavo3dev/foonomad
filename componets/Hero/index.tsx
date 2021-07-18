import Image from "next/image";
import classes from "./hero.module.css";

export function Hero() {
	return (
		<section className={classes.hero}>
			<div className={classes.image}>
				<Image
					src="/images/site/profile.jpeg"
					alt="Profile Image"
					width={300}
					height={300}
				/>
			</div>
			<h1>Welcome to N-R-G Nomad</h1>
			<p>Setup your Remot Business with NEXT.JS, Serverless & Chatbot</p>
		</section>
	);
}
