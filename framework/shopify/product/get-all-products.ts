import { getAllProductsQuery, fetchApi, normalizeProduct } from "../utils";
import { ProductConnection } from "../utils/schema/schema";


type ReturnType = {
	products: ProductConnection
}

const getAllProducts = async (): Promise<any> =>
{
	const { data } = await fetchApi<ReturnType>( { query: getAllProductsQuery } );
	
	const products = data.products.edges.map( ( { node: product } ) => normalizeProduct(product)) ?? [];
	
	return products;
};


export default getAllProducts;