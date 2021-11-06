import { FC, ReactNode } from "react";
import styles from "./Grid.module.css";
import classnames from "classnames";

interface Props
{
	children: ReactNode[]
	layout?: "A" | "B"
}

export const Grid: FC<Props> = ( {  children, layout }) =>
{

	const rootClassName = classnames(
		styles.rootGrid,
		{
			[styles.layoutA]: layout === "A",
			[styles.layoutB]: layout === "B"
		}
	);
    
	return (
		<div className={ rootClassName }>
			{ children }
		</div>	
	);
};