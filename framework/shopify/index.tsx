import { ReactNode } from "react";
import { shopifyHooks } from "./hooks";

import {
	ApiProvider as CoreApiProvider,
	useApiProvider as useCoreApiProvider
} from "@common/ApiProvider";

import { getConfig } from "@shopify/product/config";
const config = getConfig();


interface ShopifyApiProviderProps {
  children: ReactNode | ReactNode[]
}

export const ApiProvider = ({children}: ShopifyApiProviderProps) => {

	return (
		<CoreApiProvider
			config={{...config}}
			hooks={shopifyHooks}
		>
			{children}
		</CoreApiProvider>
	);
};

export const useApiProvider = () => useCoreApiProvider();