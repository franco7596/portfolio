import React, { useState, useRef, useEffect } from "react";
import { TweenMax } from "gsap";
import "./Intro.css";
import { Link } from "react-scroll";

export default function Intro() {
	const [mainNav, setMainNav] = useState(false);
	const heroClipped = useRef(null);
	const logo = useRef(null);
	const hamburgerMenu = useRef(null);
	const heroTextBox = useRef(null);

	const open = () => {
		if (mainNav) setMainNav(false);
		else setMainNav(true);
	};

	const close = () => {
		setMainNav(false);
	};

	useEffect(() => {
		TweenMax.fromTo(heroClipped.current, 1, { scaleX: 0 }, { scaleX: 1 });
		TweenMax.fromTo(
			logo.current,
			1,
			{ x: -200, opacity: 0 },
			{ delay: 0.5, x: 0, opacity: 1 }
		);
		TweenMax.fromTo(
			hamburgerMenu.current,
			1,
			{ x: 200, opacity: 0 },
			{ delay: 0.5, x: 0, opacity: 1 }
		);
		TweenMax.fromTo(
			heroTextBox.current,
			1,
			{ yPercent: 40, opacity: 0 },
			{ delay: 1.3, yPercent: -40, opacity: 1 }
		);
	}, []);

	return (
		<div className="intro-container">
			<header className="intro">
				<nav
					className={`main-nav ${mainNav ? "open" : ""}`}
					onMouseLeave={close}
				>
					<div ref={logo} className="logo">
						<h3>Franco Ribotta</h3>
					</div>
					<div ref={hamburgerMenu} className="hamburger-menu" onClick={open}>
						<span className="bar"></span>
					</div>
					<div className="nav-list">
						<li className="nav-item">
							<Link
								to="about"
								duration={1000}
								offset={0}
								spy={true}
								smooth={true}
								isDynamic={true}
							>
								<h3 className="nav-link">About me</h3>
							</Link>
						</li>
						<li className="nav-item">
							<a href="/CV.pdf" className="nav-link">
								My CV
							</a>
						</li>
						<li className="nav-item">
							<Link
								to="portfolio"
								duration={1000}
								offset={0}
								spy={true}
								smooth={true}
								isDynamic={true}
							>
								<h3 className="nav-link">Portfolio</h3>
							</Link>
						</li>
					</div>
				</nav>
			</header>
			<section className="hero">
				<div ref={heroClipped} className="hero-clipped">
					<div ref={heroTextBox} className="hero-textbox">
						<h1 className="main-heading">I Am Franco Ribotta</h1>
						<h2 className="sub-heading">
							Welcome To my Portfolio, here you could see my projects
						</h2>
						<Link
							to="about"
							duration={1000}
							offset={0}
							spy={true}
							smooth={true}
							isDynamic={true}
						>
							<button className="cta-btn crimson">Know me</button>
						</Link>
					</div>
				</div>
			</section>
		</div>
	);
}
