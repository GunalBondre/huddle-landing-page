import React, { useState, useEffect } from "react";
import Images from "../../images/index.js";
import "./footer.scss";
import validator from "validator";
const Footer = () => {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);
	const [email, setEmail] = useState();
	const [emailError, setEmailError] = useState("");

	useEffect(() => {
		const handleWindowResize = () => {
			setWindowWidth(window.innerWidth);
		};
		window.addEventListener("resize", handleWindowResize);
		return () => {
			window.removeEventListener("resize", handleWindowResize);
		};
	}, [setWindowWidth]);

	const handleChange = (e) => {
		e.preventDefault();
		let email = e.target.value;
		if (validator.isEmail(email)) {
			setEmailError("valid email");
		} else {
			setEmailError("enter valid email");
		}
		setEmail({
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (email && validator.isEmail(email)) {
			alert("success");
		} else {
			alert("enter email");
		}
	};

	return (
		<div>
			<div className="footer">
				{window.innerWidth >= 767 ? (
					<img
						src={Images.bg_footer_top_desktop}
						alt="desktop background"
						className=""
					/>
				) : (
					<img
						src={Images.bg_footer_top_mobile}
						alt="mobile background"
						className=""
					/>
				)}
				<div className="footer__wrapper">
					<div className="footer__wrapper__left">
						<img src={Images.logo_footer} alt="" className="logo-footer" />
						<p className="para">
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem,
							quo!
						</p>
						<div className="phone">
							<img src={Images.icon_phone} alt="" />
							<p className="para">120-1245-789</p>
						</div>
						<div className="email">
							<img src={Images.icon_email} alt="" />
							<p className="para">contact@huddle.com</p>
						</div>
						<div className="social-icons">
							<img src={Images.image_fb} alt="" />
							<img src={Images.image_insta} alt="" />
							<img src={Images.image_twitter} alt="" />
						</div>
					</div>
					<div className="footer__wrapper__right">
						<h2 className="title2">Newsletter</h2>
						<p className="para">
							Lorem ipsum, dolor sit amet consectetur adipisicing elit.
							Temporibus sed ad unde natus cumque amet.
						</p>
						<form action="">
							<input
								type="email"
								name="email"
								id=""
								placeholder="Enter Email Id"
								onChange={handleChange}
							/>
							<span
								style={{
									fontWeight: "bold",
									color: "red",
								}}
							>
								{setEmailError}
							</span>{" "}
							<button className="contact-btn contact-btn__subscribe">
								Subscribe
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
