// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

// type Data = {
//   name: string
// }

import { MongoClient } from "mongodb";

export default async function hendler ( req: NextApiRequest, res: NextApiResponse )
{
	if (req.method === "POST") {
		const { contactDetails } = req.body;
		const { email, name, message } = contactDetails;

		if (
			!email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
		) {
			res.send(422).json({ meesage: "Invalid Input" });
			return;
		}

		const newMessage = {
			email,
			message,
			name,
		};

		let client;

		try {
			client = await MongoClient.connect(
				`mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_contact_cluster}.wbdvr.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`,
				{ useNewUrlParser: true, useUnifiedTopology: true },
			);
		} catch (err) {
			res.status(500).json({ message: "Didnt connect to DB" + err });
			return;
		}

		const db = client.db();

		try {
			const result = await db
				.collection("messages")
				.insertOne(newMessage);

			newMessage.id = result.insertedId;
		} catch (err) {
			client.close();
			res.send(500).json({ message: `Error: ${err}` });
		}

		client.close();

		res.status(201).json({
			message: "Successfully Stored Message",
		});
	}
}
