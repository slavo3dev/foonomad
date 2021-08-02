import { useRef } from "react";
import { ButtonEvents } from "../../ui";
import classes from "./category-search.module.css";


export function CategorySearch(props: any) {
	const categoryInputRef = useRef<HTMLSelectElement>(null);

	const categories = ["TypeScript", "Remote Business"];

	function submitHandler(event: any) {
		event.preventDefault();
	
		const selectedCategory = categoryInputRef.current!.value;
		const categorySlug = selectedCategory.toLowerCase().replace( " ", "-" );

		props.onSearch(categorySlug);
	}

	return (
		<form className={classes.form} onSubmit={submitHandler}>
			<div className={classes.controls}>
				<div className={classes.control}>
					<label htmlFor="category">Category</label>
					<select id="category" ref={ categoryInputRef }>
						{ categories.map( category => <option key={category} value= {category} >{category}</option>)}
					</select>
				</div>
			</div>
			<ButtonEvents>Find Category</ButtonEvents>
		</form>
	);
}