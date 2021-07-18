import { useState, useEffect } from "react";
import classes from "./contactform.module.css";
import { sendContactData } from "../../../lib/fetch-util";
import { Notification } from "../../Ui";

export function ContactForm() {
	const [addEmail, setEmail] = useState("");
	const [addName, setName] = useState("");
	const [addMessage, setMessage] = useState("");
	const [reqStatus, setReqStatus] = useState<string>(); // "Pending", "Success", "error"
	const [reqErrorMessage, setReqErrorMessage]  = useState<string>("");

	useEffect(() => {
		if (reqStatus === "success" || reqStatus === "error") {
			const timer = setTimeout(() => {
				setReqStatus(null);
				setReqErrorMessage(null);
			}, 3000);

			return () => clearTimeout(timer);
		}
	}, [reqStatus, reqErrorMessage]);

	async function sendMessageHandle(event) {
		event.preventDefault();

		setReqStatus("pending");

		try {
			await sendContactData({
				email: addEmail,
				name: addName,
				message: addMessage,
			});
			setReqStatus("success");
			setEmail("");
			setMessage("");
			setName("");
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
		<section className={classes.contact}>
			<h1>How can I help you?</h1>
			<form className={classes.form} onSubmit={sendMessageHandle}>
				<div className={classes.controls}>
					<div className={classes.control}>
						<label htmlFor="email">Your Email</label>
						<input
							type="email"
							id="email"
							value={addEmail}
							required
							onChange={(event) => setEmail(event.target.value)}
						/>
					</div>
					<div className={classes.control}>
						<label htmlFor="name">Your Name</label>
						<input
							type="text"
							id="name"
							value={addName}
							required
							onChange={(event) => setName(event.target.value)}
						/>
					</div>
				</div>
				<div className={classes.control}>
					<label htmlFor="message">Message</label>
					<textarea
						rows={ 5 }
						id="message"
						value={addMessage}
						onChange={(event) => setMessage(event.target.value)}
					></textarea>
				</div>
				<div className={classes.actions}>
					<button>Send Message</button>
				</div>
			</form>
			{notificationData && (
				<Notification notification={notificationData} />
			)}
		</section>
	);
}
