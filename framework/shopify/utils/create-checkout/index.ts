
import { ApiFetcher } from "@common/types/api-types";
import { checkoutCreateMutation } from "@framework/utils/mutations";
import { Checkout, CheckoutCreatePayload, Maybe } from "@shopify/schema/schema";

export const createCheckout = async (
	fetch: ApiFetcher<{checkoutCreate: CheckoutCreatePayload}>
): Promise<Maybe<Checkout | undefined>> => {
	
	const { data } = await fetch({
		query: checkoutCreateMutation
	} );
    
	const { checkout } = data.checkoutCreate;
	const checkoutId = checkout?.id;


	return checkout;
};

