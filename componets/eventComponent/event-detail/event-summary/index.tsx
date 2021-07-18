import classes from "./event-summary.module.css";

export function EventSummary(props) {
	const { title } = props;

	return (
		<section className={classes.summary}>
			<h1>{title}</h1>
		</section>
	);
}
