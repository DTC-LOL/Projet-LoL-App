import React, { FormEvent, FormEventHandler } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '@pages/Home';
import Match from '@pages/Match';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" >
						<Route index element={<Home />} />
						<Route path="/match/:id" element={<Match />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
