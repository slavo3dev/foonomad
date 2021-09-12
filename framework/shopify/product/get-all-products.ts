

const getAllProducts = async (): Promise<(string | number)[]> =>
{
	const products = [ 1, 2, 3, "Slavo"];
	return products;
};


export default getAllProducts;