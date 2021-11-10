import React, { useEffect, useState } from "react";
import { Card, Grid, Transition } from "semantic-ui-react";
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
	
	const [ isEnabledAnimation, setIsEnabledAnimation] = useState(false);
	const [ duration, setDuration ] = useState( 0 );
	const [ animation, setAnimation ] = useState("");
	const [ visible, setVisible ] = useState( true );
	

	function animationHandler(){
		
		if (!isEnabledAnimation){
			setAnimation( "bounce" );
			setDuration( 1000 );
			setVisible( false );
			setIsEnabledAnimation( true );
			console.log("Inside Animation");
		} else
		{
			setAnimation("");
			setDuration( 0 );
			setVisible( true );
			setIsEnabledAnimation(false);
		}

		console.log("-------------------------- Start ---------------------");
		console.log("Hello: ", titleHeader );
		console.log( "isEnabledAnimation: ", isEnabledAnimation );
		console.log("-------------------------- end ---------------------");
	}

	
	return (
		<Link href={ postUrl } >
			<a onMouseEnter={ () => animationHandler() }>
				<Grid.Column width={ 4 } >
					<Transition
						animation={animation}
						duration={duration}
						visible={visible}
					>
						<Card
							color='blue'
							image={ urlImage.file.url }
							header={ titleHeader }
							meta={ category }
							description={ description }
							extra={extraInfo}
						/>
					</Transition>
				</Grid.Column>
			</a>
		</Link>
	);};


