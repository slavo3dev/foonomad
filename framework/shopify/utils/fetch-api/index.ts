import {
	ApiFetcherOptions,
	ApiFetcherResults
} from "@common/types/api-types";

export const fetchApi = async <T> ( {
	url = "http://localhost:4000/graphql",
	query,
	variables }: ApiFetcherOptions
): Promise<ApiFetcherResults<T>> =>
{
	const response = await fetch ( url , {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify( {query,
			variables })
	} );
	
	const { data , errors } = await response.json();

	if ( errors )
	{
		throw new Error(errors[0].message ?? errors.message);
	}

	return { data } ;
};