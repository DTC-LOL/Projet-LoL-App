import './App.css';
import React from 'react';
import styled from 'styled-components';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '@pages/Home';
import Match from '@pages/Match';


function App() {
	return (
		<Container>
			<BrowserRouter>
				<Routes>
					<Route path="/" >
						<Route index element={<Home />} />
						<Route path="/match/:id" element={<Match />} />
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
