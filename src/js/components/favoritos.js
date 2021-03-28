import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import getState from "../store/flux";

const Favorites = () => {
	const { store, actions } = useContext(Context);
	console.log(store.favorito);
	return (
		<div className="dropdown">
			<button
				className="btn btn-primary dropdown-toggle"
				type="button"
				id="dropdownMenuButton"
				data-toggle="dropdown"
				aria-haspopup="true"
				aria-expanded="false">
				Favorites
				<span className="badge badge-light">
					{store.favoritos.length}
				</span>
			</button>
			<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
				{store.favoritos.map(favorito => (
					<div key={favorito.id}>
						<div>{favorito.name}</div>
						<div>
							<button
								onClick={() => actions.deleteFav(favorito.id)}>
								x
							</button>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};
export default Favorites;
