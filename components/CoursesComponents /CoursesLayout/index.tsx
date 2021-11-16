
type Props = {
  children?: React.ReactNode;
};

export const CoursesLayout: React.FC<Props> = ({ children }) =>
{
	return (
		<div className="relative max-w-7xl mx-auto px-4">
			{ children }
		</div>
	);
};