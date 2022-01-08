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
	
	return ( 
		<Link href={ postUrl } >
			<a>
				<Grid.Column width={ 4 } >
					<Card
						color='blue'
						image={ urlImage.file.url }
						header={ titleHeader }
						meta={ category }
						description={ description }
						extra={ extraInfo }
						className="articaleCard"
					/>
				</Grid.Column>
			</a>
		</Link>
	);};


