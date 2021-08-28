import { Segment, Divider, Container, List, Image} from "semantic-ui-react";

export const Footer = () =>
{


	return (
		<Segment inverted vertical style={{ margin: "5em 0em 0em", padding: "5em 0em" }}>
			<Container textAlign='center'>

				<Divider inverted section />
				{/* <Image centered size='mini' src='/logo.png' alt="logo image" /> */}
				<a href="https://www.slavo3.com" target="_blank"><i>Power by @slavo3</i></a>
				<List horizontal inverted divided link size='small'>
					<List.Item as='a' href='/about'> About Me</List.Item>
					<List.Item as='a' href='/blog'>Blog</List.Item>
					<List.Item as='a' href='/contact'>Contact Us</List.Item>
					<List.Item as='a' href='#'>Terms and Conditions</List.Item>
					<List.Item as='a' href='#'>Privacy Policy</List.Item>
				</List>
			</Container>
		</Segment>
	);
};