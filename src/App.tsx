import './reset.css';
import './App.css';
import React from 'react';
import styled from 'styled-components';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Match from './pages/Match';
import Header from './components/Layout/Header';
import SearchPage from './pages/Search';


function App() {
	return (
		<Container>
			
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

const Container = styled.div`
  background-color: ${(props) => props.theme.colors.layout.body};
  min-height: 100vh;
`;


export default App;
