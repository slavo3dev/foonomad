import { ReactNode, FC } from "react";
import styles from "./ProductSlider.module.css";

interface Props
{
    children: ReactNode[];
}

export const ProductSlider: FC<Props> = ({ children }) =>
{
     

	return (
		<div className={styles.pSliderContainer}>
			{children}
		</div>
	);
};