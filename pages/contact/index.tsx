import { Formik } from "formik";
import { Form, Button, Segment } from "semantic-ui-react";
import { BasePage } from "../../componetns";
 
export default function contact ()
{
	return (
		<Segment stacked>
			<BasePage title="Contact Page" />
			<h1>We'd Love to Hear From You</h1>
			<Formik
				initialValues={{ name: "", email: "", message: ""}}
				onSubmit={(values, actions) => {
					setTimeout(() => {
						alert(JSON.stringify(values, null, 2));
						actions.setSubmitting(false);
					}, 1000);
				}}
			>
				{ props => (
					<Form onSubmit={ props.handleSubmit }>
						<Form.Input
							label='Full Name'
							fluid icon='user'
							iconPosition='left'
							type="text"
							onChange={props.handleChange}
							onBlur={props.handleBlur}
							value={props.values.name}
							name="name"
							placeholder='Please, introduce yourself - Type Your Full Name '
						/>
						<Form.Input
							label='Email'
							fluid
							icon='mail'
							iconPosition='left'
							type="email"
							onChange={props.handleChange}
							onBlur={props.handleBlur}
							value={props.values.email}
							name="email"
							placeholder='Your Contact e-mail! example: slavo@slavo3.com'
						/>
						<Form.TextArea
							label='Text Message'
							type='text'
							onChange={props.handleChange}
							onBlur={props.handleBlur}
							value={ props.values.message }
							name="message"
							placeholder="Please, ask how we can help or leave a message/comment"
						/>
						{ props.errors.name && <div id="feedback">{ props.errors.name }</div> }
						<Button type="submit" color='blue' fluid size='large'>Submit</Button>
					</Form>
				)}
			</Formik>
		</Segment>
	);
}