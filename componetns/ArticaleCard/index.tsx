import React from "react";
import { Card, Grid } from "semantic-ui-react";
import Link from "next/link";

interface Props  { 
	titleHeader: string,
	description: string,
	urlImage: {
		file: {
			url: string
		}
	},
	extraInfo: any,
	category: string;
	postUrl: string
}





export const ArticaleCard = ( { titleHeader, description, urlImage, extraInfo, category, postUrl}: Props ) => {
	
	console.log("Image URL: ", urlImage.file.url);
	
	return (
		<Link href={ postUrl } >
			<a>
				<Grid.Column width={ 4 } >
					<Card
						image={ urlImage.file.url }
						header={ titleHeader }
						meta={ category }
						description={ description }
						extra={extraInfo}
					/>
				</Grid.Column>
			</a>
		</Link>
	);};


