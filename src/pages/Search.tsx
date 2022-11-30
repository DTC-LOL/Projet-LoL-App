import React, { useEffect } from 'react';
import styled from 'styled-components';

import Wrapper from 'components/Layout/Wrapper';
import Search from 'components/Search';
import List from 'components/List';
//  import Container from 'react-bootstrap/Container';
import getGamesByUserNameAndLocation from 'services/api/getGamesByUserNameAndLocation';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { setGamesData, setPlayerData } from 'store/features/games/gameSlice';
import Loader from "../components/Loader";

const SearchPage: React.FC = () => {
    const { gameDatas } = useAppSelector(state => state);

    const [isLoading, setLoading] = React.useState(false);
    const [player, setPlayer] = React.useState<any>(gameDatas.player);
    const [games, setGames] = React.useState<any>(gameDatas.games);
    const [error, setError] = React.useState<string>();
    const [submited, setSubmited] = React.useState<boolean>(false);

    useEffect(() => {
        if (gameDatas.games !== null && gameDatas.player !== null) {
            setSubmited(true);
            setError('');
        }
    }, []);

    const dispatch = useAppDispatch();

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setLoading(true);
        setSubmited(true);

        const formData = new FormData(e.target);

        const data: any = {
            name: formData.get('name'),
            location: formData.get('location')
        };

        const response = await getGamesByUserNameAndLocation(data);

        if (!response.success) {

            setError(response.error);
        } else if (response.data) {
            setError('');
            // store games data in redux
            dispatch(setPlayerData(response.data));
            dispatch(setGamesData(response.data.games));

            setPlayer(response.data);
            setGames(response.data.games);
        }

        setLoading(false);
    };
    return (
        <Container>
            <Search submitMethod={handleSubmit} />
            <Content>
                {submited && !isLoading && !error && (
                    <List playerData={player} gamesData={games} total={games.length}/>
                )}
                {isLoading && <Loader/>}
                {error && <p className="text-danger">{error}</p>}
            </Content>
        </Container>);
};
const Container = styled(Wrapper)``;

const Content = styled.div`
    padding: 1rem 0;
`

export default SearchPage;