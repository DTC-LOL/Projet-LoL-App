import React, { FormEventHandler } from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components';

type Props = {
	submitMethod: FormEventHandler<HTMLFormElement> | undefined
};

const Search: React.FC<Props> = ({ submitMethod }: Props) => {
	return (
		<Container >
			<Form onSubmit={submitMethod}>
				<Row>
					<Col sm={4}>
						<Form.Group className="mb-3" controlId="name">
							<FormInput type="text" name="name" placeholder="Nom d'invocateur" />
						</Form.Group>
					</Col>
					<Col sm={2}>
						<Form.Group className="mb-3" controlId="location">
							<FormSelect name="location">
								<option>Region</option>
								<option value="europe">Europe</option>
								<option value="asie">Asie</option>
							</FormSelect>
						</Form.Group>
					</Col>
					<Col sm={2}>
						<ButtonPrimary variant="primary" type="submit">
							Rechercher
						</ButtonPrimary>
					</Col>
				</Row>
			</Form>
		</Container>
	);
};

const Container = styled.div`
	margin-top: 2rem
`;

const ButtonPrimary = styled(Button)`
	background-color: ${(props) => props.theme.colors.layout.secondary} !important;
	border-radius: 50px !important;
	border: none !important;
	padding: 0.8rem 1.7rem;
`;

const FormInput = styled(Form.Control)`
	color: #fff !important;
	background-color: rgb(40 40 40 / .9) !important;
	border: none !important;
	padding: 0.9rem 1.9rem;
`;

const FormSelect = styled(Form.Select)`
	color: #fff !important;
	background-color: rgb(40 40 40 / .9) !important;
	border: none !important;
	position: relative;
	padding: 0.9rem 1.9rem;
`;

export default Search;
