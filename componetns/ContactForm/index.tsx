import { useState, useEffect } from "react";
import { sendContactData } from "../../utils/fetch-util";
import { ContactNotify } from "../Notification";
import { Formik } from "formik";
import { Form, Button, Segment } from "semantic-ui-react";
import { HeadBasePage } from "../HeadBasePage";

export function ContactForm ()
{
	const [reqStatus, setReqStatus] = useState(""); // "Pending", "Success", "error"
	const [reqErrorMessage, setReqErrorMessage] = useState("");

	useEffect(() => {
		if (reqStatus === "success" || reqStatus === "error") {
			const timer = setTimeout(() => {
				setReqStatus("");
				setReqErrorMessage("");
			}, 3000);

			return () => clearTimeout(timer);
		}
	}, [reqStatus, reqErrorMessage]);

	async function sendMessageHandle(values: any) {

		setReqStatus("pending");

		try {
			await sendContactData(values);
			setReqStatus("success");
		} catch (error) {
			setReqStatus("error");
			setReqErrorMessage(error.message);
			console.error("Something Went Wrong: ", error.message);
		}
	}

	let notificationData;

	if (reqStatus === "pending") {
		notificationData = {
			status: "pending",
			title: "Sending message...",
			message:
        "We are submiting your request , please be patient for couple of seconds...",
		};
	}

	if (reqStatus === "success") {
		notificationData = {
			status: "success",
			title: "SUCCESS",
			message:
        "Message sent Successfully, we will get back to you ASAP!!",
		};
	}

	if (reqStatus === "error") {
		notificationData = {
			status: "error",
			title: "Something Went Wrong",
			message: `Please re-fresh your page and try againg. Thank You\n${reqErrorMessage}`,
		};
	}
	return (
		<>
			<Segment stacked>
				<HeadBasePage title="Contact Page - NRG NOMAD" />
				<h1>We'd Love to Hear From You</h1>
				<Formik
					initialValues={{ name: "", email: "", message: ""}}
					onSubmit={(values, actions) => {
						setTimeout(() => {
							actions.setSubmitting( false );
							sendMessageHandle(values);
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
								placeholder="Please, feel free to ask anything or leave a message/comment"
							/>
							{ props.errors.name && <div id="feedback">{ props.errors.name }</div> }
							<Button type="submit" color='blue' fluid size='large'>Submit</Button>
						</Form>
					)}
				</Formik>
			</Segment>
			{notificationData && (
				<ContactNotify notification={notificationData} />
			)}
		</>
	);
}