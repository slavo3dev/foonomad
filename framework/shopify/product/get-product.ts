import { ApiConfig, Variables } from "@common/types/api-types";
import { getProductQuery } from "../utils/queries/get-product-query";
import { Product as ShopifyProduct } from "../utils/schema/schema";
import { normalizeProduct } from "../utils";
import { Product } from "@common/types/product";

type FetchType = {
  productByHandle: ShopifyProduct
}

type ReturnType = {
  product: Product | null
}


export const getProduct = async (options: {config: ApiConfig, variables: Variables}): Promise<ReturnType> => {
	const { config, variables } = options;

	const { data } = await config.fetch<FetchType>({
		query: getProductQuery,
		variables
	} );
    
	const { productByHandle } = data;
    
	console.log(JSON.stringify(data.productByHandle, null, 2));

	return {
		product: productByHandle ? normalizeProduct(productByHandle) : null
	};
};
