import { useRef } from "react";
import { ButtonEvents } from "../../ui";
import classes from "./category-search.module.css";


export function CategorySearch(props: any) {
	const categoryInputRef = useRef<HTMLSelectElement | null>( null );
	
	const categories: [string] = props.posts.map(( post: any ) => post.fields.category).sort().filter((item: string, index:number, arr:[]) => {
		return !index || item != arr[index - 1];
	});

	function submitHandler(event: any) {
		event.preventDefault();
	
		const selectedCategory = categoryInputRef.current?.value;
		const categorySlug = selectedCategory?.toLowerCase().replace( " ", "-" );

		props.onSearch(categorySlug);
	}

	return (
		<form className={classes.form} onSubmit={submitHandler}>
			<div className={classes.controls}>
				<div className={classes.control}>
					<label htmlFor="category">Category</label>
					<select id="category" ref={ categoryInputRef }>
						{ categories.map( (category: string )=> <option key={category} value= {category} >{category}</option>)}
					</select>
				</div>
			</div>
			<ButtonEvents>Find Category</ButtonEvents>
		</form>
	);
}