import { useEffect } from "react";
import { HeadBasePage } from "../../componetns";
import { Container, Header } from "semantic-ui-react";

declare global {
    interface Window {
        __isAboutLoaded: boolean;
    }
}

const About = () => {
	
	useEffect(() => {
		return () => {
			window.__isAboutLoaded = true;
		};
	});

	const createFadeInClass = () => {
		if (typeof window !== "undefined") {
			return window.__isAboutLoaded ? "" : "fadein";
		}

		return "fadein";
	};


	return (
		<>
			<HeadBasePage
				title="About Me - NRG NOMAD"
				className="about-page" />
			<Container text style={ { justifyContent: "center", width: "50%", margin: "auto"}}>
				<Header>
					<div className="left-side">
						<h1 className={`title ${createFadeInClass()}`}>NRG NOMAD</h1>
						<h4 className={`subtitle ${createFadeInClass()}`}>Slavo Popovic</h4>
						<p className={`subsubTitle ${createFadeInClass()}`}>Feel free to read short description about me.</p>
					</div>
				</Header>
				
				<div className={`${createFadeInClass()}`}>
					<p>I am an experienced software web engineer & freelance developer. </p>
					<p>Self-Thought, Self-Directed &  motivated Software Developer who works effectively in a dynamic environment.<br /> Fluent in JavaScript / TypeScript. Know: Python, Go </p>
					<p>Problem-solving Software Developer is successful at creating a seamless user experience throughout the entire product line. A highly focused developer is adept at streamlining complicated processes by incorporating minimalist design principles into the user experience.</p>
					<p>Tech Stack: JavaScript / TypeScript, NEXTJS,  NodeJS, jQuery, React and React Native, Python, AWS, SEO, Wordpress, specializing in technical and industrial applications, mobile applications, and marketing integration. </p>
					<a href="mailto:slavo@slavo3.com">➨ Book a FREE 30-minute consultation with me slavo@slavo3.com</a>
				</div>
			</Container>
		</>
	);
};

export default About;