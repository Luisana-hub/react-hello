const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			planets: [],
			vehiculos: [],
			favoritos: [],
			favorito: " ",
			id: " "
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
			},
			agregaFav: favorito => {
				const store = getStore();
				const newFav = {
					id: new Date().getTime(),
					name: favorito
				};
				setStore({ favoritos: [...store.favoritos].concat(newFav) });
			},
			deleteFav: id => {
				const store = getStore();
				const updatedFav = [...store.favoritos].filter(
					favorito => favorito.id !== id
				);
				setStore((store.favoritos = updatedFav));
			}
		}
	};
};
export default getState;
