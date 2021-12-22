import React from "react";

function Navbar() {
	return (
		<nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
			<div className="container-fluid">
				<a className="navbar-brand" href="#">
					Sage Grayson
				</a>

				<div
					className=""
					id="navbarSupportedContent"
					
				>
					<ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
						<li className="nav-item">
							<a className="nav-link" href="#">
								about
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								work
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								connect
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								github
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
