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
					<p>I specialize in rapidly building online business, software companies and web applications</p>
					<p>Self-Thought, Self-Directed Software Developer who works effectively in a dynamic environment.<br /> Fluent in JavaScript / TypeScript. Bonus: Python, Go </p>
					<p>My blog is where I share and learn knowledge publicly, Except mainly front-end development, with a sprinkling of remote and nomadic lifestyles.</p>
					<p>I'm trying to be less precious about writing, so I've started a snippets and notes section over here for smaller posts</p>
					<p>Tech: JavaScript / TypeScript, NEXTJS,  NodeJS, React / React Native,AWS, SEO </p>
					<p>Business: Remote Job SKills, Digital Nomad Life Style, Career Change, Courses Recommendation</p>
					<a href="mailto:slavo@slavo3.com">➨ Book a FREE 30-minute consultation with me slavo@slavo3.com</a>
				</div>
			</Container>
		</>
	);
};

export default About;