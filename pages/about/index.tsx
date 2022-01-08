import { useEffect } from "react";
import { HeadBasePage } from "../../components";
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
				title="About Me - foo(Nomad)"
				className="about-page" />
			<Container text style={ { justifyContent: "center", width: "50%", margin: "auto"}}>
				<Header>
					<div className="left-side">
						<h1 className={`title ${createFadeInClass()}`}>Prototype.NEXT</h1>
						<h4 className="link-css"><a href="https://www.linkedin.com/in/slavopopovic/" target="_blank">Connect with Slavo - Consulting/Software Enginner</a></h4>
						<p className={`subsubTitle ${createFadeInClass()}`}>Feel free to read short description about me.</p>
					</div>
				</Header>
				
				<div className={`${createFadeInClass()}`}>
					<p>We specialize in rapidly building online business, software companies and web applications</p>
					<p>Self-Thought, Self-Directed Software Developer who works effectively in a dynamic environment.<br /> Fluent in JavaScript / TypeScript. Bonus: Python, Go </p>
					<p>Our blog is where we share and learn knowledge publicly, Except mainly front-end development, cross-platform application  with a sprinkling of remote and nomadic lifestyles.</p>
					<p>We are trying to be less precious about writing, so We have started a snippets and notes section over here for smaller posts</p>
					<p>Tech: JavaScript / TypeScript, NEXTJS,  NodeJS, React / React Native,AWS, SEO </p>
					<p>Prototype your project and test on the market</p>
					<p>Build you online business & app</p>
					<a href="mailto:slavo@slavo3.com">➨ Book a FREE 30-minute consultation</a>
				</div>
			</Container>
		</>
	);
};

export default About;