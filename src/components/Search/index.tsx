import React, { FormEventHandler } from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components';

type Props = {
	submitMethod: FormEventHandler<HTMLFormElement> | undefined
};

const Search: React.FC<Props> = ({ submitMethod }: Props) => {
	return (
		<Container className="pt-5 pb-3">
			<Form onSubmit={submitMethod}>
				<Row>
					<Col>
						<Form.Group className="mb-3" controlId="name">
							<FormInput type="text" name="name" placeholder="Pseudo du joueur" />
						</Form.Group>
					</Col>
					<Col>
						<Form.Group className="mb-3" controlId="location">
							<FormSelect name="location">
								<option>Localisation du joueur</option>
								<option value="europe">Europe</option>
								<option value="asie">Asie</option>
							</FormSelect>
						</Form.Group>
					</Col>
					<Col>
						<ButtonPrimary variant="primary" type="submit">
							Rechercher
						</ButtonPrimary>
					</Col>
				</Row>
			</Form>
		</Container>
	);
};

const ButtonPrimary = styled(Button)`
	background-color: #0D47A1 !important;
	border-radius: 0 !important;
	border: none !important;
`;

const FormInput = styled(Form.Control)`
	color: #fff !important;
	background-color: #363636 !important;
	border: none !important;
	border-radius: 0 !important;
`;

const FormSelect = styled(Form.Select)`
	color: #fff !important;
	background-color: #363636 !important;
	border: none !important;
	border-radius: 0 !important;
`;

export default Search;
