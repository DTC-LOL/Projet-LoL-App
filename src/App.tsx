import React, { FormEvent, FormEventHandler } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Map from './components/Map';
import Filters from './components/Filters';
import Search from './components/Search';
import List from './components/List';
import Container from 'react-bootstrap/Container';
import getGamesByUserNameAndLocation from '@services/api/getGamesByUserNameAndLocation';

function App() {
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
		
		setPlayer(response.data);
		setGames(response.data.games);
		
		setLoading(false);
	};

	return (
		<div className="App">
			<Search submitMethod={handleSubmit}/>
			{
				submited ? isLoading ? <Container><p>Loading...</p></Container> :
					!error ? <List playerData={player} gamesData={games} /> : 
					<p>{error}</p> : ""
			}
			<Map/>
			<Filters />
		</div>
	);
}

export default App;
