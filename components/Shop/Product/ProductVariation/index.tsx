import { FC } from "react";
import s from "./ProductVariation.module.css";
import { Check } from "@components/Icons";

interface Props {
  color?: string
  label?: string
}


export const ProductVariation: FC<Props> = ({color, label, variant}) => {

	label = label?.toLowerCase();
	variant = variant?.toLocaleLowerCase();

	return (
	
		<button
			style={color ? {backgroundColor: color} : {}}
			className={s.root}>
			{/* <span>
        <Check />
      </span> */}
			{ variant === "size" ? label : null }
		</button>
		
	);
};