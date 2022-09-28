import React, { FormEventHandler } from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

type Props = {
	submitMethod: FormEventHandler<HTMLFormElement> | undefined
};

const Search: React.FC<Props> = ({ submitMethod }: Props) => {
	return (
		<Container className="py-4">
			<Form onSubmit={submitMethod}>
				<Row>
					<Col>
						<Form.Group className="mb-3" controlId="name">
							<Form.Control type="text" name="name" placeholder="Pseudo du joueur" />
						</Form.Group>
					</Col>
					<Col>
						<Form.Group className="mb-3" controlId="location">
							<Form.Select name="location">
								<option>Localisation du joueur</option>
								<option value="europe">Europe</option>
								<option value="asie">Asie</option>
							</Form.Select>
						</Form.Group>
					</Col>
					<Col>
						<Button variant="primary" type="submit">
							Rechercher
						</Button>
					</Col>
				</Row>
			</Form>
		</Container>
	);
};
export default Search;
