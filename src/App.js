import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Header from "./Component/Header/Header";
import Footer from "./Component/Footer/Footer";
import "./Styles/theme.scss";
import "./Styles/common.scss";

const App = () => {
	return (
		<div>
			<Header />
			<Router>
				<Route exact path="/" component={Home}></Route>
			</Router>
			<Footer />
		</div>
	);
};

export default App;
