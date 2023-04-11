import React, { useState, useEffect } from "react";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Intro from "./components/Intro/Intro";
import Loading from "./components/Loading/Loading";
import Portfolio from "./components/Portfolio/Portfolio";
import portfoliosData from "./helpers/portfolio.json";
import aboutData from "./helpers/about.json";

function App() {
	const [fetchingData, setFetchingData] = useState(true);
	const [res, setRes] = useState({ about: {}, portfolio: [] });

	const fetchData = async () => {
		setFetchingData(false);
		setRes({ about: aboutData, portfolio: portfoliosData });
	};

	useEffect(() => {
		fetchData();
	}, []);

	const content = fetchingData ? (
		<Loading />
	) : (
		<div className="App ld ld-float-ltr-in">
			<Intro />
			<About informationAbout={res.about} />
			<Portfolio informationPortfolio={res.portfolio} />
			<Footer />
		</div>
	);

	return content;
}

export default App;
