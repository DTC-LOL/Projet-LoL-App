import React, { FormEvent, FormEventHandler } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

import logo from './logo.svg';
import './App.css';
import Map from './components/Map';
import Filters from './components/Filters';
import Search from './components/Search';
import List from './components/List';

function App() {
	const [loading, setLoading] = React.useState(true);
	const [player, setPlayer] = React.useState<any>();
	const [games, setGames] = React.useState<any>();
	const [error, setError] = React.useState<string>();

	const handleSubmit = (e: any) => {
		e.preventDefault();
		const formData = new FormData(e.target);

		const data = {
			name: formData.get('name'),
			location: formData.get('location')
		};

		const fetchData = async () => {
			const player_url = `http://127.0.0.1:8000/api/player?name=${data.name}&location=${data.location}`;
			try {
				await axios.get(player_url, {
					headers: {
						'content-type': 'application/json',
					}
				}).then(response => {
					console.log(response.data);
					setPlayer(response.data);
					setGames(response.data.games);
					setLoading(false);
				}).catch(error => {
					setError(error.message);
				});
			} catch (error: any) {
				setError(error.message);
			}
		};
		fetchData();
	};

	const displayErrorOrList = () => {
		if(!loading) {
			if(error) {
				return <p>{error}</p>;
			} else {
				return <List playerData={player} gamesData={games} isLoading={loading} />;
			}
		}
	};
	
	return (
		<div className="App">
			<Search submitMethod={handleSubmit}/>
			{displayErrorOrList()}
			<Map/>
			<Filters />
		</div>
	);
}

export default App;
