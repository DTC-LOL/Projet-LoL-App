import React from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import Map from './components/Map';
import Search from './components/Search';
import List from './components/List';

function App() {
	const player_url = 'http://127.0.0.1:8000/api/player?name=qrab';
	const [player, setPlayer] = React.useState<any>();
	const [games, setGames] = React.useState<any>();
	const [error, setError] = React.useState<any>();

	axios.get(player_url, {
		headers: {
			'content-type': 'application/json',
		}
	}).then((response) => {
		setPlayer(response.data);
		setGames(response.data.games);
	}).catch((error) => {
		setError(error.message);
	});

	console.log(games);
	
	return (
		<div className="App">
			<Search/>
			<List name={player?.name} />
			<Map/>
		</div>
	);
}

export default App;
