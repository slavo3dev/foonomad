import ReactDOM from "react-dom";
import classes from "./notification.module.css";

export const ContactNotify: React.FC = (props: any) => {
	const { notification } = props;
	const { title, message, status } = notification;

	console.log("Notification Props: ", props);

	let statusClasses = "";

	if (status === "success") {
		statusClasses = classes.success;
	}

	if (status === "error") {
		statusClasses = classes.error;
	}

	const cssClasses = `${ classes.notification } ${ statusClasses }`;
	
	const portalDiv = document.getElementById("notifications");


	return portalDiv ? ReactDOM.createPortal(
		<div className={ cssClasses }>
			<h2>{ title }</h2>
			<p>{ message }</p>
		</div>,
		portalDiv,
	) : null;
};
