
import { useHook } from "@lib/use-hooks";



export const useAddItem = () => {

	const hook = useHook((hooks) => {
		return hooks.cart.useAddItem;
	});

	return hook.useHook({
		fetch: hook.fetcher
	});
};
