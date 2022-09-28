import React, { FC } from 'react';
import axios from 'axios';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';

type Props = {
	creation: any,
	mode: any,
	uuid: string
}

const Line: React.FC<Props> = ({creation, mode, uuid}: Props) => {
	const [loading, setLoading] = React.useState(true);
	const [game, setGame] = React.useState<any>();
	const [error, setError] = React.useState<any>();

	const fetchGame = (uuid: any) => {
		axios.get(`http://127.0.0.1:8000/api/game?name=${uuid}`, {
			headers: {
				'content-type': 'application/json',
			}
		}).then((response: any) => {
			setGame(response.data);
			setLoading(false);
		}).then((error: any) => {
			setError(error.message)
		});

		console.log(game);
	}

	const pad = (number: any) => {
		return number.toString().padStart(2, '0');
	}
	
	const formatDate = (date: any) => {
		return [
			pad(date.getDate()),
			pad(date.getMonth()),
			date.getFullYear(),
		].join('/');
	}

	return (
		<ListGroup.Item disabled onClick={() => {fetchGame(uuid)}}>
			<Row>
				<Col>Partie {mode}</Col>
				<Col>Jouée le {formatDate(new Date(creation))}</Col>
			</Row>
		</ListGroup.Item>
	);
};

export default Line;
