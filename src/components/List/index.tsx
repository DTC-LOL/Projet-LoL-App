import React, { FC } from 'react';

import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Line from './line';

type Props = {
	playerData: any,
	gamesData: Array<any>,
	isLoading: boolean
}

const List: React.FC<Props> = ({playerData, gamesData, isLoading}: Props) => {

	if(!isLoading) {
		return (
			<Container className="py-4">
				
				<ListGroup>
					{gamesData.map((item: { recap: any, uuid: string}) => (
						<Line 
							key={item.uuid}
							creation={item.recap.game_creation}
							mode={item.recap.game_code}
							uuid={item.uuid}
						/>
					))}
				</ListGroup> 
			</Container>
		);
	} else {
		return (
			<Container>
				<p>Loading...</p>
			</Container>
		);
	}
};

export default List;
