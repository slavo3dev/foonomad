import { HeroMarketplace } from "./HeroMarketplace";
import { BreadCrumbs } from "./Breadcrumbs";
import { WalletEth } from "./WalletEth";
import { RatesEth } from "./RatesEth";
import { OrderCard } from "./OrderCard";
import { ProductList } from "./ProductList";
import { MarketplaceLayout } from "./MarketplaceLayout";


export const Marketplace = () =>
{
	return (
		<MarketplaceLayout>
			<HeroMarketplace />
			<BreadCrumbs />
			<WalletEth />
			<RatesEth />
			<OrderCard />
			<ProductList />
		</MarketplaceLayout>
	);
};