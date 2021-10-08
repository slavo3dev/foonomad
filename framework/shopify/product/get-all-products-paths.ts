import { ApiConfig } from "@common/types/api-types";
import { Product } from "@common/types/product";
import { getAllProductsPathsQuery } from "../utils/queries/get-all-products-paths";
import { ProductConnection } from "../utils/schema/schema";


type ReturnType = {
  products: Pick<Product, "slug">[]
}

export const getAllProductsPaths = async (config: ApiConfig): Promise<ReturnType> => {
	const { data } = await config.fetch<{products: ProductConnection}>({
		query: getAllProductsPathsQuery,
		url: config.apiUrl});

	const products = data.products.edges.map(({node: {handle}}) => {
		return {
			slug: handle
		};
	});

	return { products };
};