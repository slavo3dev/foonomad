import { MutationHook } from "@common/types/hooks";
import { useAddItem } from "@common/cart/use-add-item";
export { useAddItem };

export const handler: MutationHook = {
	fetcher: ({fetch, input}) => {
		const response = fetch(input);
		return response;
	},
	useHook: ({fetch}) => {
		return (input: any) => {
			const response = fetch(input);
			return {
				output: response
			};
		};
	}
};