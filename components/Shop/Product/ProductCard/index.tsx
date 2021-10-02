import { Product } from "@common/types/product";
import {FC} from "react";

interface Props
{
    product: Product;
}

export const ProductCard: FC<Props> = ( { product } ) =>
{

	console.log("Products: ", product);
	return (
		<div>
			<h1>{product.name}</h1>
		</div>
	);
};