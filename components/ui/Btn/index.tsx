import { FC, ReactNode, ButtonHTMLAttributes } from "react";
import s from "./Btn.module.css";
import cn from "classnames";

interface Props {
  children: ReactNode | ReactNode[]
}

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode | ReactNode[]
}

export const Btn: FC<Props> = ({
	children,
	className,
	...rest
}) => {


	return (
		<button
			className={cn(s.root, className)}
			type="button"
			{...rest}
		>
			{children}
		</button>
	);
};