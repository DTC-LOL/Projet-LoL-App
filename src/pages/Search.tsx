import React from 'react';
import styled from 'styled-components';

import Wrapper from '@components/Layout/Wrapper';
import Search from '@components/Search';
import List from '@components/List';
//  import Container from 'react-bootstrap/Container';
import getGamesByUserNameAndLocation from '@services/api/getGamesByUserNameAndLocation';

const SearchPage: React.FC = () => {
    const [isLoading, setLoading] = React.useState(false);
    const [player, setPlayer] = React.useState<any>();
    const [games, setGames] = React.useState<any>();
    const [error, setError] = React.useState<string | null>(null);
    const [submited, setSubmited] = React.useState<boolean>(false);

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setLoading(true);
        setSubmited(true);
        
        const formData = new FormData(e.target);

        const data = {
            name: formData.get('name'),
            location: formData.get('location')
        };

        const response = await getGamesByUserNameAndLocation(data);
        
        if (!response.success) {
            
            setError(response.error);
        } else{
            setPlayer(response.data);
            setGames(response.data.games);
            setError(null);
        }

        setLoading(false);
    };
    return (
        <Container>
            <Search submitMethod={handleSubmit} />
            {submited && !isLoading && !error && (
                <List playerData={player} gamesData={games} />
            )}
            {isLoading && <p>Loading...</p>}
            {error && <p className="text-danger">{error}</p>}
        </Container>);
};
const Container = styled(Wrapper)``;

export default SearchPage;