import styles from "../../../styles/Home.module.css";


export const BodyLayout = ( { children }: any) =>
{
	return (
		<div className={styles.container}>
			<main className={ styles.main }>
				{children}
			</main>
		</div>
	);
};