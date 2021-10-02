import { Product } from "@common/types/product";
import {FC} from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./ProductCard.module.css";


interface Props
{
	product: Product;
	variant: "simple" | "slim";
}

export const ProductCard: FC<Props> = ( { product, variant="simple" } ) =>
{

	const placeholderImg = "/assets/images/product-image-placeholder.svg"; 
	const productImage = product.images[ 0 ].url ?? placeholderImg;
	

	const simpleProduct = (
		<> 
			<div className={styles.productBG}></div>
			<div className={styles.productTag}>
				<h1 className={styles.productTitle}>{ product.name }</h1>
				<span className={ styles.productPrice }>
					{ product.price.value } { product.price.currencyCode}
				</span>
			</div>
			{
				product.images && (
					<Image
						className={styles.productImage}
						src={productImage}
						alt={ product.name ?? "Product Image" }
						height={540}
						width={540}
						layout="responsive"
						quality="85"
					/>
				)
			}
		</>
	);


	const slimProduct = (
		<>
			<div>
				<span>{product.name }</span>
			</div>
			{
				product.images && (
					<Image
						className={styles.productImage}
						src={productImage}
						alt={ product.name ?? "Product Image" }
						height={320}
						width={320}
						layout="fixed"
						quality="85"
					/>
				)
			}
		</>
	);

	return (
		<Link href={ `/products/${ product.slug }` }>
			<a className={ styles.productContainer }>
				{ variant === "slim" ? slimProduct
					: simpleProduct
				}
			</a>
		</Link>
	);
};