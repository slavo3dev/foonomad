import { normalizeCart } from "./../normalize/normalizeProduct";
import { Checkout, Maybe } from "@shopify/utils/schema/schema";




export const checkoutToCart = (checkout?: Maybe<Checkout>) => {
	if (!checkout) {
		throw new Error("Missing checkout object!");
	}

	return normalizeCart(checkout);
};

