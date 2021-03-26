import React, { useContext, useEffect } from "react";
import Card from "../components/card";
import { Context } from "../store/appContext";
import getState from "../store/flux";

function Home() {
	const { store, actions } = useContext(Context);
	useEffect(() => {
		actions.fetchCharacters();
		actions.fetchPlanets();
		actions.fetchVehiculos();
	}, []);
	return (
		<div className="container">
			<div>
				<h1>Characters</h1>
			</div>
			<div className="card-deck">
				{store.characters.map(item => (
					<div key={item.uid}>
						<Card
							title={item.name}
							id={item.uid}
							especific={"people"}
						/>
					</div>
				))}
			</div>
			<div>
				<h1>Planets</h1>
			</div>
			<div className="card-deck">
				{store.planets.map(item => (
					<div key={item.uid}>
						<Card
							title={item.name}
							id={item.uid}
							especific={"planets"}
						/>
					</div>
				))}
			</div>
			<div>
				<h1>Vehiculos</h1>
			</div>
			<div className="card-deck">
				{store.vehiculos.map(item => (
					<div key={item.uid}>
						<Card
							title={item.name}
							id={item.uid}
							especific={"vehicles"}
						/>
					</div>
				))}
			</div>
		</div>
	);
}
export default Home;
