/* eslint-disable @typescript-eslint/no-explicit-any */
import styles from "../../../styles/Home.module.css";

interface Props {
	children: any
}


export const BodyLayout = ( { children }: Props) =>
{
	return (
		<div className={styles.container}>
			<main className={ styles.main }>
				{children}
			</main>
		</div>
	);
};