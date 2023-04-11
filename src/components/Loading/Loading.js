import React from "react";
import "./Loading.css";

const Loading = () => {
	return (
		<div className="loading-background">
			<div className="loading-spinner">
				<p className="loading-spinner-text">Loading...</p>
			</div>
		</div>
	);
};

export default Loading;
