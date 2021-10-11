export const handler = {
	fetcher: (input: any) => {
		return JSON.stringify(input) + "_MODIFIED";
	},
	useHook: () => {
		return ( input: any ) =>
		{
			const response = fetch(input);
			return {
				output: response
			};
		};
	}
};