import React from "react";

function Navbar() {
	return (
		<nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
			<div className="container-fluid">
				<a className="navbar-brand" href="https://www.google.com">
					Sage Grayson
				</a>
				<div className="" id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
						<li className="nav-item">
							<a className="nav-link" href="https://www.google.com">
								about
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="https://www.google.com">
								work
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="https://www.google.com">
								connect
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="https://www.google.com">
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
