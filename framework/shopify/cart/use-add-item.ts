import { MutationHook } from "@common/types/hooks";
import { useAddItem } from "@common/cart/use-add-item";
import { getCheckoutId, checkoutLineItemsAdd } from "@framework/utils";

export { useAddItem };

export const handler: MutationHook = {
	fetcherOptions: {
		query: checkoutLineItemsAdd
	},
	fetcher: async ( { fetch, options, input } ) =>
	{
		
		const variables = {
			checkoutId: getCheckoutId(),
			lineItems: [
				{
					variantId: input.variantId,
					quantity: 1
				}
			]};
		const response = await fetch({
			...options, variables
		});
		return response;
	},
	useHook: ({fetch}) => {
		return async (input: any) => {
			const response = await fetch(input);
			return {
				output: response
			};
		};
	}
};