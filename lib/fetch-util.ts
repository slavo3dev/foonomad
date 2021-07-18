export async function sendContactData(contactDetails) {
	console.log("Contact: ", contactDetails);
	const resposne = await fetch("/api/contact", {
		method: "POST",
		header: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ contactDetails }),
	});

	const data = await resposne.json();

	if (!resposne.ok) {
		throw new Error(data.message || "Sorry, Something went wrong!!");
	}
}

/* 
 contactDetails = {
    email: addEmail,
    name: addName,
    message: addMessage,
 }
*/
