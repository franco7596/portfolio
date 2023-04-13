import React, { useRef, useState, useEffect } from "react";
import "./workExperience.css";
import { TweenMax } from "gsap";

export default function WorkExperience({
	descriptionIntersection,
	experiences,
}) {
	const [descriptionWasAnimated, setDescriptionWasAnimated] = useState(false);
	const experience = useRef(null);
	useEffect(() => {
		if (
			descriptionIntersection &&
			descriptionIntersection.isIntersecting &&
			!descriptionWasAnimated
		) {
			TweenMax.fromTo(
				experience.current,
				1,
				{ xPercent: 40, opacity: 0 },
				{ delay: 1, xPercent: 0, opacity: 1 }
			);
			setDescriptionWasAnimated(true);
		}
	}, [descriptionIntersection]);

	return (
		<div className="work-experience" ref={experience}>
			{experiences?.length !== 0 &&
				experiences.map((experience, index) => {
					return (
						<div className="experience-container" key={index}>
							<div className="experience-time-line">
								<div className="experience-circle" />
								<div className="experience-line" />
							</div>
							<div className="experience-data">
								<h3>
									{experience.position}, {experience.company}
								</h3>
								<h3>
									{experience.date_start}-{experience.date_end}
								</h3>
								<ul>
									{experience.activities.map((activiti, index) => (
										<li key={index}>{activiti}</li>
									))}
								</ul>
							</div>
						</div>
					);
				})}
		</div>
	);
}
