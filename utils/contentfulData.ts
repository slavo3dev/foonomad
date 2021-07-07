import { createClient } from "contentful";


export async function contenfulData() {
	let data;
    
	const client = createClient({
		space: process.env.NEXT_PUBLIC_SPACE_ID || "",
		accessToken: process.env.NEXT_PUBLIC_ACCESS_TOKEN  || ""
	});

	try
	{
		data = await client
			.getEntries({
				content_type: "blog"
			});
	} catch ( err )
	{
		console.log("Error Message: ", err);
		data = { errorMsg: "Something Went Wrong, Please try again later!!!"};
	}
    
	return data;
}