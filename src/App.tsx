import React from 'react';
import logo from './logo.svg';
import './App.css';
import Map from './components/Map';
import Filters from './components/Filters';

function App() {
	return (
		<div className="App">
			<Map/>
			<Filters />
		</div>
	);
}

export default App;
