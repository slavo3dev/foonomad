import { FC } from "react";
import s from "./ProductVariation.module.css";
import { Check } from "@components/Icons";

interface Props {
  color?: string
    label?: string
    variant?: "size" | "color" | string
    onClick: () => void
}


export const ProductVariation: FC<Props> = ({color, label, variant, ...rest}) => {

	label = label?.toLowerCase();
	variant = variant?.toLocaleLowerCase();

	return (
	
		<button
			style={color ? {backgroundColor: color} : {}}
			className={s.root}
			{...rest}>
			<span>
				<Check />
			</span>
			{ variant === "size" ? label : null }
		</button>
		
	);
};