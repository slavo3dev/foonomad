import cn from "classnames";
import { FC } from "react";
import s from "./ProductContainer.module.css";
import Image from "next/image";
import { Product } from "@common/types/product";
import { ProductSlider } from "@components/Shop";

interface Props {
  product: Product
}

export const ProductContainer: FC<Props> = ({ product }: any) => {

	return (
		<>
			<div className={cn(s.rootContainer, "fit")}>
				<div className={cn(s.productDisplay, "fit")}>
					<div className={s.nameBox}>
						<h1 className={s.name}>{product.name}</h1>
						<div className={s.price}>{product.price.value}</div>
					</div>
					<ProductSlider>
						{ product.images.map( ( image: { url: string, alt: string}) =>
							<div key={image.url} className={s.imageContainer}>
								<Image
									className={s.img}
									src={image.url}
									alt={image.alt}
									width={1050}
									height={1050}
									quality="85"
								/>
							</div>
						)}
					</ProductSlider>
				</div>
				<div className={s.sidebar}>
					<section>
						<div className="pb-4">
							<h2 className="uppercase font-medium">Color</h2>
							<div className="flex flex-row py-4">
                Variant Options Here!
							</div>
						</div>
						<div className="pb-14 break-words w-full max-w-xl text-lg"> { product.description }</div>
					</section>
					<div>
						<button
							onClick={() => { alert("BTN");}}
							aria-label="Add to Cart"
							className={s.button}
						>
              Add to Cart
						</button>
					</div>
				</div>
			</div>
		</>
	);
};