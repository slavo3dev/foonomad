
import { useHook, useMutationHook } from "@lib/use-hooks";



export const useAddItem = () => {

	const hook = useHook((hooks) => {
		return hooks.cart.useAddItem;
	});

	return useMutationHook({...hook});
};
