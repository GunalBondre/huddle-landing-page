import React from "react";
import "./header.scss";
import Images from "../../images/index";
const Header = () => {
	return (
		<div>
			<nav className="navbar">
				<div className="logo">
					<img src={Images.logo} alt="" />
				</div>
				<ul className="menu-item">
					<li>
						<a href="#" className="contact-btn--outline">
							Try it free
						</a>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Header;
