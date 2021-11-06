
import { FC } from "react";
import styles from "./LayoutShop.module.css";

export const ShopLayout: FC = ({ children }) =>
{

	return (
		<div className={styles.layout}>
			{ children }
		</div>
	);
};