import { InferGetServerSidePropsType } from "next";
import getAllProducts from "../../framework/shopify/product/get-all-products";
import { ShopLayout } from "@components/Shop";


export default function contact ( { products }: InferGetServerSidePropsType<typeof getStaticProps> )
{

	console.log("Props: ", products );
	return (
		<>
			<ShopLayout />
		</>);
	
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