import Link from "next/link";

import classes from "./button-events.module.css";

export function ButtonEvents(props: any) {
	if (props.link) {
		return (
			<Link href={props.link}>
				<a className={classes.btn}>{props.children}</a>
			</Link>
		);
	}

	return (
		<button className={classes.btn} onClick={props.onClick}>
			{props.children}
		</button>
	);
}