import React, { FC, Children, isValidElement,  useState  } from "react";
import classes from "./ProductSlider.module.css";
import { useKeenSlider } from "keen-slider/react";
import cn from "classnames";



export const ProductSlider: FC = ({children}) => {

	const [currentSlide, setCurrentSlide] = useState(0);
	const [sliderRef, slider] = useKeenSlider({
		initial: 0,
		loop: true,
		slideChanged(s) {
			setCurrentSlide(s.details().relativeSlide);
		},
	});

	return (
		<div className={classes.root}>
			<div
				ref={sliderRef as React.RefObject<HTMLDivElement>}
				className="keen-slider h-full transition-opacity">
				<button
					onClick={slider?.prev}
					className={cn(classes.leftControl, classes.control)}
				/>
				<button
					onClick={slider?.next}
					className={cn(classes.rightControl, classes.control)}
				/>
				{ Children.map(children, child => {
					if (isValidElement(child)) {
						return {
							...child,
							props: {
								...child.props,
								className: `${
									child.props.className ? `${child.props.className}` : ""
								} keen-slider__slide`
							}
						};

					}

					return child;
				}
				) }
			</div>
		</div>
	);
};