import { Product } from "@common/types/product";
import {FC} from "react";
import Link from "next/link";
import Image from "next/image";


interface Props
{
    product: Product;
}

export const ProductCard: FC<Props> = ( { product } ) =>
{

	const placeholderImg = "/assets/images/product-image-placeholder.svg"; 
	const productImage = product.images[0].url ?? placeholderImg;
	return (
		<Link href={ `/products/${ product.slug }` }>
			<a>
				<div>
					<h1>{ product.name }</h1>
					<span>$15</span>
				</div>
				{
					product.images && (
						<Image
							src={productImage}
							alt={ product.name ?? "Product Image" }
							height={540}
							width={540}
							layout="responsive"
							quality="85"
						/>
					)
				}
			</a>
		</Link>
	);
};