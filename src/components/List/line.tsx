import React, { FC } from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import moment from 'moment';
import localSelector from '@services/momentjs/locales/fr';

type Props = {
	creation: any,
	mode: any
}

const Line: React.FC<Props> = ({ creation, mode }: Props) => {
	React.useEffect(() => {
		localSelector(navigator.language.split("-")[0]);
	},[])
	return (
		<ListGroup.Item disabled>
			<Row>
				<Col>Partie {mode}</Col>
				<Col>Jouée le {moment(creation).format("dddd D MMMM  YYYY à h:mm:ss ")}</Col>
			</Row>
		</ListGroup.Item>
		
	);
};

export default Line;
