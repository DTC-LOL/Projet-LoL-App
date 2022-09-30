import React from 'react';
import styled from 'styled-components';

import Search from '@components/Search';
import List from '@components/List';
import Container from 'react-bootstrap/Container';
import getGamesByUserNameAndLocation from '@services/api/getGamesByUserNameAndLocation';

const Home: React.FC = () => {
    const [isLoading, setLoading] = React.useState(true);
    const [player, setPlayer] = React.useState<any>();
    const [games, setGames] = React.useState<any>();
    const [error, setError] = React.useState<string>();
    const [submited, setSubmited] = React.useState<boolean>(false);

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setSubmited(true);
        const formData = new FormData(e.target);

        const data = {
            name: formData.get('name'),
            location: formData.get('location')
        };

        const response = await getGamesByUserNameAndLocation(data);

		if(response.error) {
			setError(response.error);
		} else if(response.data) {
			setPlayer(response.data);
			setGames(response.data.games);
			setError('');
		}

        setLoading(false);
    };
    return (
        <Container>
            <Search submitMethod={handleSubmit} />
            {
                submited ? isLoading ? <Container><p>Loading...</p></Container> :
                    !error ? <List playerData={player} gamesData={games} /> :
                        <p>{error}</p> : ""
            }

        </Container>
    );
};

export default Home;