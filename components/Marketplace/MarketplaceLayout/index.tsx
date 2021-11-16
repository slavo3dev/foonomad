type Props = {
  children?: React.ReactNode;
};

export const MarketplaceLayout: React.FC<Props> = ({ children }) =>
{
	return (
		<div>
			<div className="relative overflow-hidden">
				<div className="relative max-w-7xl mx-auto px-4">
					<div className="fit">
						{ children }
					</div>
				</div>
			</div>
		</div>
	);
};