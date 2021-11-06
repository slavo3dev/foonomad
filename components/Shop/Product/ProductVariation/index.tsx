import { FC } from "react";
import s from "./ProductVariation.module.css";
import { Check } from "@components/Icons";
import cn from "classnames";
import { isDark } from "@lib/color";

interface Props {
  color?: string
    label?: string
    variant?: "size" | "color" | string
    onClick: () => void
    active?: boolean
}


export const ProductVariation: FC<Props> = ({color, label, variant, active, ...rest}) => {

	label = label?.toLowerCase();
	variant = variant?.toLocaleLowerCase();

	const rootClassName = cn(
		s.root,
		{
			[s.active]: active,
			[s.color]: color,
			[s.size]: variant === "size",
			[s.dark]: color && isDark(color)
		}
	);

	return (
	
		<button
			style={color ? {backgroundColor: color} : {}}
			className={rootClassName}
			{...rest}>
			{ variant === "color" && active && <span><Check style={{ color: "red"}} /></span> }
			{ variant === "size" ? label : null }
		</button>
		
	);
};