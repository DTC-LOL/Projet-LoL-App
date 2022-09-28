import React, { FC } from 'react';
import styled from 'styled-components';

type Props = {
	name: string;
};

const List: FC<Props> = ({ name }: Props) => {
	return (
		<Container>
			<p>{name}</p>
		</Container>
	);
};

const Container = styled.div`
	background: #fff
`;
export default List;
