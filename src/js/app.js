import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "./views/home";
import Favorites from "./components/favoritos";
import injectContext from "./store/appContext";
import Detalle from "./views/detalle";

const App = () => {
	return (
		<Router>
			<div className="row justify-content-between">
				<div className="col-2">
					<ul className="nav">
						<li className="nav-item">
							<Link className="nav-link active" to="/">
								<img
									id="logo"
									src="https://www.vippng.com/png/detail/290-2900870_star-wars-logo-starwars-guerra-de-las-galaxias.png"></img>
							</Link>
						</li>
					</ul>
				</div>
				<div className="col-4">
					<Favorites />
				</div>
			</div>
			<Switch>
				<Route exact path="/detalle/:especific/:id">
					<Detalle />
				</Route>
				<Route exact path="/">
					<Home />
				</Route>
				<Route render={() => <h1>Not found</h1>} />
			</Switch>
		</Router>
	);
};
export default injectContext(App);
