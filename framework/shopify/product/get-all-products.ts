import { getAllProductsQuery,fetchApi } from "../utils";


const getAllProducts = async (): Promise<any> =>
{
	const products = await fetchApi({ query: getAllProductsQuery});
	return products;
};


export default getAllProducts;