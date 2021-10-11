import { useApiProvider } from "@common/ApiProvider";
import { ApiHooks } from "@common/types/hooks";


export const useHook = (fn: (apiHooks: ApiHooks) => any) => {
	const { hooks } = useApiProvider();
	return fn(hooks);
};