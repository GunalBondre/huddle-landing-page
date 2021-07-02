import React, { useState, useEffect } from "react";
import "./home.scss";
import Images from "../../images/index.js";

const Home = () => {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

	useEffect(() => {
		const handleWindowResize = () => {
			setWindowWidth(window.innerWidth);
		};
		window.addEventListener("resize", handleWindowResize);
		return () => {
			window.removeEventListener("resize", handleWindowResize);
		};
	}, [setWindowWidth]);
	return (
		<div>
			{/* section 1 - hero section */}
			<section className="section-1 hero-section">
				<h1 className="title1">Build The Community Your Fans Will Love</h1>
				<p className="para">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
					laudantium quaerat ullam distinctio animi esse unde. Vero
					necessitatibus laudantium, illum nam ducimus, rem quae esse quis
					itaque, et unde repellendus!
				</p>
				<button className="contact-btn">Get Started For Free</button>
			</section>
			{/* section-1 ends */}
			{/* section-2 */}
			<section className="section-2">
				<img src={Images.screen_mockups} alt="" className="banner-1" />

				<div className="communities">
					<div className="communities__formed">
						<img src={Images.icon_communities} alt="" />
						<div className="community-numbers">14.4k +</div>
						<p className="para">Communities Formed</p>
					</div>
					<div className="communities__message-sent">
						<img src={Images.icon_messages} alt="" />
						<div className="community-numbers">2.7M +</div>
						<p className="para">Message Sent</p>
					</div>
				</div>
			</section>
			{/* section-2 ends here */}

			<section className="section-3">
				<div className="section-3__wrapper">
					{window.innerWidth >= 767 ? (
						<img
							src={Images.bg_section_desktop_1}
							alt="desktop background"
							className="bg-section3"
						/>
					) : (
						<img
							src={Images.bg_section_mobile_1}
							alt="mobile background"
							className="bg-section3"
						/>
					)}
					<div className="section-3__inner">
						<div className="left-section">
							<h2 className="title2">Grow Together</h2>
							<p className="para">
								Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod
								reprehenderit laboriosam molestias officiis, necessitatibus at
								dolor. Similique maiores iure blanditiis eius reiciendis, harum
								repudiandae molestiae, sunt voluptatibus eligendi ipsum? Autem.
							</p>
						</div>
						<div className="right-section">
							<img src={Images.illustration_grow_together} alt="" />
						</div>
					</div>
					{window.innerWidth >= 767 ? (
						<img
							src={Images.bg_section_desktop_2}
							alt="desktop background"
							className="bg-section3"
						/>
					) : (
						<img
							src={Images.bg_section_mobile_2}
							alt="mobile background"
							className="bg-section3"
						/>
					)}
				</div>
			</section>

			<section className="section-4">
				<div className="section-4__wrapper">
					<div className="section-4__wrapper__left">
						<img src={Images.flowing_conversation} alt="flowing-conversation" />
					</div>
					<div className="section-4__wrapper__right">
						<h2 className="title2">Flowing Conversation</h2>
						<p className="para">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quis
							repellendus aliquid, voluptatem saepe suscipit? Et totam labore
							eius similique.
						</p>
					</div>
				</div>
			</section>

			<section className="section-5">
				{window.innerWidth >= 767 ? (
					<img
						src={Images.bg_section_desktop_3}
						alt="desktop background"
						className="bg-section3"
					/>
				) : (
					<img
						src={Images.bg_section_mobile_3}
						alt="mobile background"
						className="bg-section3"
					/>
				)}
				<div className="section-5__wrapper">
					<div className="section-5__wrapper__left">
						<h2 className="title2">Your User</h2>
						<p className="para">
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia
							ea, illum aspernatur id atque neque a facilis iure eius.
							Blanditiis?
						</p>
					</div>
					<div className="section-5__wrapper__right">
						<img src={Images.your_users} alt="your users image" />
					</div>
				</div>
				{window.innerWidth >= 767 ? (
					<img
						src={Images.bg_section_desktop_4}
						alt="desktop background"
						className="bg-section3"
					/>
				) : (
					<img
						src={Images.bg_section_mobile_4}
						alt="mobile background"
						className="bg-section3"
					/>
				)}
			</section>

			<section className="section-6">
				<div className="section-6__wrapper">
					<h2 className="title2">Ready to build your community</h2>
					<button className="contact-btn">Get Started For Free</button>
				</div>
			</section>
		</div>
	);
};

export default Home;
