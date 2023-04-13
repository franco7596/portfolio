import React from "react";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Intro from "./components/Intro/Intro";
import Portfolio from "./components/Portfolio/Portfolio";
import portfoliosData from "./helpers/portfolio.json";
import aboutData from "./helpers/about.json";

function App() {
	return (
		<div className="App ld ld-float-ltr-in">
			<Intro />
			<About informationAbout={aboutData} />
			<Portfolio informationPortfolio={portfoliosData} />
			<Footer informationAbout={aboutData} />
		</div>
	);
}

export default App;
