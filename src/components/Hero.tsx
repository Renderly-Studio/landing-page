import React from "react";

const Hero: React.FC = () => {
	return (
		<div
			className="absolute inset-0 z-20 flex flex-col justify-center items-center px-6"
		>
			<h1
				className="hero-title hero-title--solid text-4xl sm:text-6xl lg:text-8xl font-extrabold italic tracking-wider"
				style={{ alignSelf: "flex-start", marginLeft: "10%", marginBottom: "5px" }}
			>
				RENDERLY
			</h1>
			<h1
				className="hero-title hollow-text text-4xl sm:text-6xl lg:text-8xl font-extrabold italic tracking-wider"
				data-text="STUDIO"
				style={{ alignSelf: "flex-end", marginRight: "10%" }}
			>
				STUDIO
			</h1>
		</div>
	);
};

export default Hero;


