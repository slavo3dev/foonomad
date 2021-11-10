import styles from "../../../styles/Home.module.css";

interface Props
{
	children: any
}

// Body Function
export const BodyLayout= (props: Props) =>
{
	return (
		<div className={styles.container}>
			<main className={ styles.main }>
				{props.children}
			</main>
		</div>
	);
};