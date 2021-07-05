import styles from "../../../styles/Home.module.css";
import React from "react";
interface Props
{
	children: any
}


export const BodyLayout: React.FC<Props> = (props) =>
{
	return (
		<div className={styles.container}>
			<main className={ styles.main }>
				{props.children}
			</main>
		</div>
	);
};