import { Link } from "react-router-dom";
import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import getState from "../store/flux";

const Card = props => {
	return (
		<div className="card">
			<img
				src="https://via.placeholder.com/400x200"
				className="card-img-top"
				alt="..."></img>
			<div className="card-body">
				<h5 className="card-title">{props.title} </h5>
				<p className="card-text">TEXT</p>
				<div className="row justify-content-between">
					<div className="col-8">
						<Link
							to={`/detalle/${props.especific}/${props.id}`}
							className="btn btn-primary">
							Learn more!
						</Link>
					</div>
					<div className="col-3">
						<Link>FAV</Link>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Card;
