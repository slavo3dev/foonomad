import { useEffect } from "react";
import { InferGetServerSidePropsType } from "next";



export default function contact ( { products }: InferGetServerSidePropsType<typeof getStaticProps> )
{

	console.log("Props: ", products);
	return <h1>Hello Shop Page</h1>;
	
}

export async function getStaticProps ( params: any )
{
	const products: (string | number)[] = [ 1, 2, 3 ];

	return {
		props: {
			products
		},
		revalidate: 4 * 60 * 60
	};

}