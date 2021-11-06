import { InferGetServerSidePropsType } from "next";
import getAllProducts from "../../framework/shopify/product/get-all-products";
// import { ShopLayout } from "../../components";
import { ShopLayout, ProductCard, Grid, ProductCarosaul } from "@components/Shop";
import { Product } from "@common/types/product";
import { useUI } from "@components/Context";


export default function shop ( { products }: InferGetServerSidePropsType<typeof getStaticProps> )
{

	const UIcontext = useUI();
	console.log("UI Context: ", UIcontext);
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
			<ProductCarosaul>
				{ products.slice( 0, 3 ).map( (product: Product) =>
					<ProductCard
						variant="slim"
						key={ product.id}
						product={ product } />
				)}
			</ProductCarosaul>
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