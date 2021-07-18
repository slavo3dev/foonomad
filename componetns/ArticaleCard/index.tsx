import React from "react";
import { Card } from "semantic-ui-react";

interface Props  { 
	titleHeader: string,
	description: string,
	urlImage: string,
	extraInfo: any,
	category: string;
}



export const ArticaleCard = ({ titleHeader, description ,urlImage, extraInfo, category }: Props) => (
	
	<Card
		image={ urlImage }
		header={ titleHeader }
		meta={ category }
		description={ description }
		extra={extraInfo}
	/>
);


