import { FC, ReactNode } from "react";
import styles from "./Grid.module.css";

interface Props
{
	children: ReactNode[]
	layout?: "A" | "B"
}

export const Grid: FC<Props> = ( {  children }) =>
{
    
	return (
		<div className={styles.rootGrid}>
			{ children }
		</div>	
	);
};