import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import js from "react-syntax-highlighter/dist/cjs/languages/prism/javascript";
import css from "react-syntax-highlighter/dist/cjs/languages/prism/css";
import classes from "./postcontent.module.css";
import ReactMarkdown from "react-markdown";


SyntaxHighlighter.registerLanguage("js", js);
SyntaxHighlighter.registerLanguage( "css", css );



export function PostContent ( { content }: any )
{
	const customRenderers = {
		p ( paragraph: any )
		{
        
			// I add images in the text in the future 
			// const { node } = paragraph;
			// if (node.children[0].tagName === "img") {
			// 	const image = node.children[0];

			// 	return (
			// 		<div className={classes.image}>
			// 			<Image
			// 				src={`/images/posts/${content.fields.slug}/${image.properties.src}`}
			// 				alt={image.alt}
			// 				width={600}
			// 				height={300}
			// 			/>
			// 		</div>
			// 	);
			// }
			return <p>{paragraph.children}</p>;
		},
		code ( code: any) {
			const { className, children } = code;
			const language = className.split("-")[1]; // className is something like language-js => We need the "js" part here
			return (
				<SyntaxHighlighter
					style={atomDark}
					language={language}
					children={children}
				/>
			);
		},
	};
    
	return (
		<article className={classes.content}>
			<ReactMarkdown components={ customRenderers }>
				{content}
			</ReactMarkdown>
		</article>
	);
}