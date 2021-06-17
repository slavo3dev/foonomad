import React from "react";
import { Image, Item } from "semantic-ui-react";

type Props = { titleHeader: string, description:string ,urlImage:string, extraDitails:string }

export const ItemTemplate = ( { titleHeader, description ,urlImage, extraDitails }: Props) => (
	<Item.Group>
		<Item>
			<Item.Image size='tiny' src='https://react.semantic-ui.com/images/wireframe/image.png' />

			<Item.Content>
				<Item.Header as='a'>{ titleHeader}</Item.Header>
				<Item.Meta>{description}</Item.Meta>
				<Item.Description>
					<Image src={ urlImage } />
				</Item.Description>
				<Item.Extra>{ extraDitails }</Item.Extra>
			</Item.Content>
		</Item>
	</Item.Group>
);
