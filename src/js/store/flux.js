const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			planets: [],
			vehiculos: []
		},
		actions: {
			fetchCharacters: () => {
				fetch("https://www.swapi.tech/api/people")
					.then(response => response.json())
					.then(data => setStore({ characters: data.results }))
					.catch(error => console.log(error));
			},
			fetchPlanets: () => {
				fetch("https://www.swapi.tech/api/planets")
					.then(response => response.json())
					.then(data => setStore({ planets: data.results }))
					.catch(error => console.log(error));
			},
			fetchVehiculos: () => {
				fetch("https://www.swapi.tech/api/vehicles")
					.then(response => response.json())
					.then(data => setStore({ vehiculos: data.results }))
					.catch(error => console.log(error));
			}
		}
	};
};
export default getState;
