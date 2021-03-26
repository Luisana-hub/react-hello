import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Detalle = () => {
	const { id, especific } = useParams();
	console.log(id);
	console.log(especific);

	const [array, setArray] = useState([]);
	useEffect(() => {
		fetch(`https://www.swapi.tech/api/${especific}/${id}`)
			.then(response => response.json())
			.then(data => setArray(data.result.properties))
			.catch(error => console.log(error));
	}, []);
	console.log(array.name);

	return (
		<>
			<div className="media">
				<img
					src="https://via.placeholder.com/400x400"
					className="mr-5"
					alt="..."></img>
				<div className="media-body">
					<h1 className="mt-0">{array.name} </h1>
					{array.height}
				</div>
			</div>
		</>
	);
};
export default Detalle;
