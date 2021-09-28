import { ImageEdge } from "./../schema/schema.d";
import { Product as ShopifyProduct } from "../schema/schema";

import { Product } from "../../../common/types/product";



function normalizeProductImages ( {edges}: {edges: Array<ImageEdge>})
{
	return edges.map( ( { node: { originalSrc: url, ...rest} }) => {
        
		return {
			url: `/images/${ url }`,
			...rest
		};
	});
}


export function normalizeProduct(productNode: ShopifyProduct): Product
{
	const { id, title: name, handle, vendor, description, images: imgSrc, ...rest } = productNode;
    

	const product = {
		id,
		name,
		vendor,
		description,
		path: `/${handle}`,
		slug: handle.replace( /^\/+|\/+$/g, "" ),
		images: normalizeProductImages(imgSrc),
		...rest
	};
    
	return product;
}