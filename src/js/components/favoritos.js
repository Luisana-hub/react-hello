import React from "react";
import { Link } from "react-router-dom";

const Favorites = () => {
	//const { id, especific } = useParams();

	//const [array, setArray] = useState([]);
	//useEffect(() => {
	//	fetch(`https://www.swapi.tech/api/${especific}/${id}`)
	//		.then(response => response.json())
	//		.then(data => setArray(data.result.properties))
	//		.catch(error => console.log(error));
	//}, []);
	//console.log(array.name);
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
				<span className="badge badge-light">4</span>
			</button>
			<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
				<Link className="dropdown-item">Action</Link>
				<Link className="dropdown-item">Another action</Link>
				<Link className="dropdown-item">Something else here</Link>
			</div>
		</div>
	);
};
export default Favorites;
