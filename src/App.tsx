import './reset.css';
import './App.css';
import React from 'react';
import styled from 'styled-components';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Match from './pages/Match';
import Header from './components/Layout/Header';
import SearchPage from './pages/Search';
import champions from './data/champions.json';
const randomChampion = champions.champions[Math.floor(Math.random() * champions.champions.length)].name;
function App() {
	//Js random number between 0 and champions.champions.length
	return (
		<Container randomChampion={randomChampion}>
			<BrowserRouter>
				<Header/>
				<Routes>
					<Route path="/" >
						<Route index element={<Home />} />
						<Route path="/match/:id" element={<Match />} />
						<Route path="/search" element={<SearchPage />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</Container>
	);
}

const Container = styled.div<{randomChampion: any}>`
  min-height: 100vh;
  position: relative;
	&::before {
		content: "";
		position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background-color: ${(props) => props.theme.colors.layout.body}; 
		background-image: ${(props) => ` url("https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${props.randomChampion}_0.jpg")`};
  background-size: cover;
  background-repeat: no-repeat;
  filter: grayscale(100%);
  z-index: -1;	
	}
`;


export default App;
