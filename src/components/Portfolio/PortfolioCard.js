import React, { useRef, useState } from "react";
import { useIntersection } from "react-use";
import "./PortfolioCard.css";
import { TweenMax } from "gsap";
import { Fade } from "react-slideshow-image";
import { FaGithub, FaLink } from "react-icons/fa";

export default function PortfolioCard({ project, timeSlide }) {
	const fadeProperties = {
		duration: timeSlide,
		transitionDuration: 500,
		infinite: true,
		indicators: true,
		arrows: true,
	};

	const card = useRef(null);
	const [wasAnimated, setWasAnimated] = useState(false);
	const cardIntersection = useIntersection(card, {
		root: null,
		rootMargin: "0px",
		threshold: 0.01,
	});

	function animate() {
		if (!wasAnimated) {
			TweenMax.fromTo(
				card.current,
				1,
				{ yPercent: 40, opacity: 0 },
				{ yPercent: 0, opacity: 1 }
			);
			setWasAnimated(true);
		}
	}

	if (cardIntersection && cardIntersection.isIntersecting) animate();

	return (
		<div ref={card} className="portfolio-card">
			<div className="carousel-container">
				<Fade {...fadeProperties}>
					{project.images.map((image, index) => (
						<div className="each-fade" key={index}>
							<img className="carousel-image" alt={index} src={image} />
						</div>
					))}
				</Fade>
			</div>
			<div className="portfolio-card-textbox">
				<div className="card-pills">
					{project.tecnologies.map((pill, index) => (
						<p className="card-pill" key={index}>
							{pill}
						</p>
					))}
				</div>
				<h1>{project.name}</h1>
				<p>{project.description}</p>
				<div className="portfolio-button-zone">
					<a href={project.link} target="_blank">
						<button className="portfolio-card-button">
							<FaLink /> Page
						</button>
					</a>
					{project.repo && (
						<a href={project.repo} target="_blank">
							<button className="portfolio-card-button">
								<FaGithub /> Repo
							</button>
						</a>
					)}
				</div>
			</div>
		</div>
	);
}
