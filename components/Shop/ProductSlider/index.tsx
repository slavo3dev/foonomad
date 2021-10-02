import { ReactNode, FC } from "react";
import styles from "./ProductSlider.module.css";
import Ticker from "react-ticker";

interface Props
{
    children: ReactNode[];
}

export const ProductSlider: FC<Props> = ({ children }) =>
{
	return (
		<div className={ styles.pSliderContainer }>
			<Ticker offset={200}>
				{
					() =>
						<div className={ styles.pSliderRow }>
				
							{children}
						</div>	
				}
			</Ticker>
		</div>

        
	);
};