import styles from "../../../styles/Home.module.css";

export const Footer = () =>
{
	return (
		<footer className={ styles.footer }>
			<a
				href="https://www.nrgval.com"
				target="_blank"
				rel="noopener noreferrer"
			>
          Powered by NRG_VAL</a> &nbsp; &  &nbsp;<a
				href="https://www.slavo3.com"
				target="_blank"
				rel="noopener noreferrer"
			>Slavo3.com </a>
		</footer>);
};