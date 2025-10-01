import { useEffect, useState } from "react";
import image1 from "./assets/image_3.png";
import image2 from "./assets/image_2.png";
import image3 from "./assets/image_1.png";
import Header from "./components/Header";
import SignUpSection from "./components/SignUpSection";
import { inject } from "@vercel/analytics";

function App() {
	const [imagesLoaded, setImagesLoaded] = useState(false);

	useEffect(() => {
		// Preload images before triggering animations
		const imagesToLoad = [image1, image2, image3];
		let loadedCount = 0;

		const checkAllLoaded = () => {
			loadedCount++;
			if (loadedCount === imagesToLoad.length) {
				// Small delay after images load for smooth appearance
				setTimeout(() => setImagesLoaded(true), 150);
			}
		};

		imagesToLoad.forEach((src) => {
			const img = new Image();
			img.onload = checkAllLoaded;
			img.onerror = checkAllLoaded; // Still trigger even if image fails
			img.src = src;
		});
	}, []);

	useEffect(() => {
		inject();
	}, []);

	return (
		<>
			<div className="bg-black w-full min-h-screen text-white overflow-x-hidden">
				{/* Hero Section */}
				<div className="w-screen h-screen flex flex-col relative overflow-hidden">
					<Header />

					{/* Main content area below header */}
					<div className="flex-1 flex relative">
						{/* Heading overlay */}
						<div className="absolute inset-0 z-20 flex flex-col justify-center items-stretch px-4 pointer-events-none">
							<h1
								// Keep existing smaller sizes
								className="text-5xl sm:text-6xl md:text-6xl lg:text-7xl 
                   // Override the largest size with a custom vw value
                   xl:text-[8vw] 
                   font-black italic tracking-wider heading-shadow self-start md:ml-[20%] animate-fade-in"
								style={{
									marginBottom: "5px",
								}}
							>
								RENDERLY
							</h1>
							<h1
								className="text-5xl sm:text-6xl md:text-6xl lg:text-7xl 
                   // Override the largest size with a custom vw value
                   xl:text-[8vw] 
                   font-black italic tracking-wider hollow-text self-end md:mr-[20%] animate-fade-in-delay"
								data-text="STUDIO"
							>
								STUDIO
							</h1>
						</div>

						{/* Desktop: 3 images side by side */}
						<div
							className={`hidden md:flex flex-1 py-20 px-20 justify-start transition-all duration-700 ${
								imagesLoaded ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
							}`}
						>
							<img src={image1} alt="text" className="w-auto h-[75%] object-contain" />
						</div>
						<div
							className={`hidden md:flex flex-1 py-20 px-8 justify-center items-center transition-all duration-700 delay-150 ${
								imagesLoaded ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
							}`}
						>
							<img src={image2} alt="text" className="w-auto h-[75%] object-contain" />
						</div>
						<div
							className={`hidden md:flex flex-1 py-20 px-20 justify-end items-end transition-all duration-700 delay-300 ${
								imagesLoaded ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
							}`}
						>
							<img src={image3} alt="text" className="w-auto h-[75%] object-contain" />
						</div>

						{/* Mobile: center image with corner peeks */}
						<div
							className={`md:hidden flex-1 flex justify-center items-center px-5 transition-all duration-700 ${
								imagesLoaded ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
							}`}
						>
							<img src={image2} alt="text" className="w-auto max-h-[60vh] object-contain" />
						</div>

						{/* Mobile: corner images */}
						<img
							src={image1}
							alt="text"
							className={`md:hidden absolute top-0 left-0 w-40 h-40 sm:w-48 sm:h-48 object-cover object-bottom-right -translate-x-16 -translate-y-16 z-0 transition-opacity duration-700 ${
								imagesLoaded ? "opacity-50" : "opacity-0"
							}`}
						/>
						<img
							src={image3}
							alt="text"
							className={`md:hidden absolute bottom-0 right-0 w-40 h-40 sm:w-48 sm:h-48 object-cover object-top-left translate-x-16 translate-y-16 z-0 transition-opacity duration-700 delay-300 ${
								imagesLoaded ? "opacity-50" : "opacity-0"
							}`}
						/>
					</div>
				</div>

				{/* Sign Up Section */}
				<SignUpSection />
			</div>
		</>
	);
}

export default App;
