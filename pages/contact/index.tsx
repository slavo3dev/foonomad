import { ContactForm } from "../../components";
import { Container } from "semantic-ui-react";

 
export default function contact ()
{
	return (
		<Container style={{ margin: "5%", width: "45%", boxShadow: "12px 12px 2px 1px rgba(0, 102, 204, .1)" }}>
			<ContactForm />
		</Container>
	);
	
}