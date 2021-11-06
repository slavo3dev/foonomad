import { ImageEdge } from "./../schema/schema.d";
import { Product as ShopifyProduct, MoneyV2,  ProductOption, ProductVariantConnection,  SelectedOption, Checkout,CheckoutLineItemEdge } from "../schema/schema";
import { Cart } from "@common/types/cart";
import { Product } from "../../../common/types/product";


const normalizeProductOption = ({
	id,
	values,
	name: displayName
}: ProductOption) => {

	const normalized = {
		id,
		displayName,
		values: values.map(value => {
			let output: any = {
				label: value
			};

			if (displayName.match(/colou?r/gi)) {
				output = {
					...output,
					hexColor: value
				};
			}

			return output;
		})
	};

	return normalized;
};

const normalizeProductVariants = ({ edges }: ProductVariantConnection) => {

	return edges.map(({node}) => {
		const { id, selectedOptions, sku, title, priceV2, compareAtPriceV2} = node;

		return {
			id,
			name: title,
			sku: sku || id,
			price: +priceV2.amount,
			listPrice: +compareAtPriceV2?.amount,
			requiresShipping: true,
			options: selectedOptions.map(({name, value}: SelectedOption) => {
				const option = normalizeProductOption({
					id,
					name,
					values: [value]
				});

				return option;
			})
		};
	});
};

function normalizeProductImages ( {edges}: {edges: Array<ImageEdge>})
{
	return edges.map( ( { node: { originalSrc: url, ...rest} }) => {
        
		return {
			url: `/images/${ url }`,
			...rest
		};
	});
}

function normalizeProductPrice ( {currencyCode, amount}: MoneyV2)
{
	return {
		value: +amount,
		currencyCode
	};
}


export function normalizeProduct(productNode: ShopifyProduct): Product
{
	const {
		id,
		title: name,
		handle, vendor,
		description,
		images:
		imgSrc,
		priceRange,
		options,
		variants,
		...rest } = productNode;
    

	const product = {
		id,
		name,
		vendor,
		description,
		path: `/${handle}`,
		slug: handle.replace( /^\/+|\/+$/g, "" ),
		images: normalizeProductImages( imgSrc ),
		price: normalizeProductPrice( priceRange.minVariantPrice ),
		options: options ? options.filter( o => o.name !== "Title" ).map( o => normalizeProductOption( o ) ) : [],
		variants: variants ? normalizeProductVariants(variants) : [],
		...rest
	};
    
	return product;
}

export const normalizeCart = (checkout: Checkout): Cart => {
	return {
		id: checkout.id,
		createdAt: checkout.createdAt,
		currency: {
			code: checkout.totalPriceV2.currencyCode
		},
		taxesIncluded: checkout.taxesIncluded,
		lineItemsSubtotalPrice: +checkout.subtotalPriceV2.amount,
		totalPrice: checkout.totalPriceV2.amount,
		lineItems: checkout.lineItems.edges.map(normalizeLineItem),
		discounts: []
	};
};

const normalizeLineItem = ({
	node: { id, title, variant, ...rest}
}: CheckoutLineItemEdge): any => {
	return {
		id,
		variantId: String(variant?.id),
		productId: String(variant?.id),
		name: title,
		path: variant?.product?.handle ?? "",
		discounts: [],
		// TODO: options
		variant: {
			id: String(variant?.id),
			sku: variant?.sku ?? "",
			name: variant?.title,
			// TODO: image
			requiresShipping: variant?.requiresShipping ?? false,
			// actual price
			price: variant?.priceV2.amount,
			// base price
			listPrice: variant?.compareAtPriceV2?.amount,
		},
		...rest
	};
};