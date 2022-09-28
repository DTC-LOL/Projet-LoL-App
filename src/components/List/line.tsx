import React, { FC } from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';

type Props = {
	creation: any,
	mode: any
}

const Line: React.FC<Props> = ({ creation, mode }: Props) => {

	return (
		<ListGroup.Item disabled>
			<Row>
				<Col>Partie {mode}</Col>
				<Col>Jouée le {creation}</Col>
			</Row>
		</ListGroup.Item>
	);
};

export default Line;
