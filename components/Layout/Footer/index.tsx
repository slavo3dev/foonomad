import { Segment, Divider, Container, List } from "semantic-ui-react";
import classes from "./Footer.module.css";

export const Footer = () =>
{


	return (
		<Segment inverted vertical style={{ margin: "5em 0em 0em", padding: "5em 0em" }}>
			<Container textAlign='center'>
				<a href="https://www.prototypenext.com" target="_blank" className={ classes.linkTag }><i>© { new Date().getFullYear()} Prototype.NEXT | Power by @slavo3  </i></a>
				<Divider inverted section />
				{/* <Image centered size='mini' src='/logo.png' alt="logo image" /> */}
				<List horizontal inverted divided link size='small'>
					<List.Item as='a' href='/about'> About Me</List.Item>
					<List.Item as='a' href='/blog'>Blog</List.Item>
					{/* <List.Item as='a' href='/contact'>Contact Us</List.Item>
					<List.Item as='a' href='#'>Terms and Conditions</List.Item>
					<List.Item as='a' href='#'>Privacy Policy</List.Item> */}
				</List>
			</Container>
		</Segment>
	);
};