import React from "react";
import pfp from "../../assets/pfp.jpg";
function About() {
	return (
			<div className="bg-dark text-light text-center">
				<img src={pfp} alt="Profile Picture" width="300" height="300"/>
				<h1>Like The Color</h1>
				<a>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore fugit, officiis minima, illum neque iure animi veritatis error inventore omnis exercitationem architecto possimus voluptatum sint incidunt enim consectetur porro ullam?</a>
			</div>
	);
}
export default About;
