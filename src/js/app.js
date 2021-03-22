import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./views/home";

export function App() {
	const [character, setCharacter] = useState([]);
	useEffect(() => {
		fetch("https://www.swapi.tech/api/people")
			.then(response => response.json())
			.then(data => setCharacter(data))
			.catch(error => console.log(error));
	}, []);
	console.log(character);
	return (
		<Router>
			<div className="row justify-content-between">
				<div className="col-2">NAV</div>
				<div className="col-4">FAVORITOS</div>
			</div>
			<Switch>
				<Route exact path="/detalle">
					DETALLE
				</Route>
				<Route exact path="/">
					<Home />
				</Route>
				<Route render={() => <h1>Not found</h1>} />
			</Switch>
		</Router>
	);
}
