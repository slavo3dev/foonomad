import { HeroMarketplace } from "./HeroMarketplace";
import { BreadCrumbs } from "./Breadcrumbs";
import { WalletEth } from "./WalletEth";
import { RatesEth } from "./RatesEth";
import { OrderCard } from "./OrderCard";
import { ProductList } from "./ProductList";


export const Marketplace = () =>
{
	return (
		<div>
			<div className="relative overflow-hidden">
				<div className="relative max-w-7xl mx-auto px-4">
					<div className="fit">
						<HeroMarketplace />
						<BreadCrumbs />
						<WalletEth />
						<RatesEth />
						<OrderCard />
						<ProductList />
					</div>
				</div>
			</div>
		</div>
	);
};