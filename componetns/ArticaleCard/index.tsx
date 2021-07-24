import React from "react";
import { Card, Grid } from "semantic-ui-react";
import Link from "next/link";

interface Props  { 
	titleHeader: string,
	description: string,
	urlImage: string,
	extraInfo: any,
	category: string;
	postUrl: string
}



export const ArticaleCard = ( { titleHeader, description, urlImage, extraInfo, category, postUrl}: Props ) => (
	<li>
		<Link href={ postUrl } >
			<a>
				<Grid.Column width={ 4 } >
					<Card
						image={ urlImage }
						header={ titleHeader }
						meta={ category }
						description={ description }
						extra={extraInfo}
					/>
				</Grid.Column>
			</a>
		</Link>
	</li>
);


