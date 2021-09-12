import { useEffect } from "react";
import { InferGetServerSidePropsType } from "next";
import getAllProducts from "../../framework/shopify/product/get-all-products";


export default function contact ( { products }: InferGetServerSidePropsType<typeof getStaticProps> )
{

	console.log("Props: ", products);
	return <h1>Hello Shop Page</h1>;
	
}

export async function getStaticProps ()
{
	const products: (string | number)[] = await getAllProducts();

	return {
		props: {
			products
		},
		revalidate: 4 * 60 * 60
	};

}