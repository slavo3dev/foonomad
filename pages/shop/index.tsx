import { InferGetServerSidePropsType } from "next";
import getAllProducts from "../../framework/shopify/product/get-all-products";
// import { ShopLayout } from "../../components";
import { ShopLayout, ProductCard, Grid, ProductSlider } from "@components/Shop";
import { Product } from "@common/types/product";


export default function contact ( { products }: InferGetServerSidePropsType<typeof getStaticProps> )
{

	console.log("Props: ", products );
	return (
		<ShopLayout>
			<Grid>
				{ products.slice( 0, 3 ).map( (product: Product) =>
					<ProductCard
						variant="simple"
						key={ product.id}
						product={ product } />
				)}
			</Grid>
			<ProductSlider>
				{ products.slice( 0, 3 ).map( (product: Product) =>
					<ProductCard
						variant="slim"
						key={ product.id}
						product={ product } />
				)}
			</ProductSlider>
		</ShopLayout>
	);
	
}

export async function getStaticProps ()
{
	const products: any = await getAllProducts();

	return {
		props: {
			products
		},
		revalidate: 4 * 60 * 60
	};

}