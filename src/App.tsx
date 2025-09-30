import image1 from "./assets/image_3.png";
import image2 from "./assets/image_2.png";
import image3 from "./assets/image_1.png";
import Header from "./components/Header";

function App() {
	return (
		<div className="bg-black w-screen h-screen text-white flex flex-col relative overflow-hidden">
			<Header />

			{/* Main content area below header */}
			<div className="flex-1 flex relative">
				{/* Heading overlay */}
				<div className="absolute inset-0 z-20 flex flex-col justify-center items-stretch px-4 pointer-events-none">
					<h1
						className="text-5xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl font-black italic tracking-wider heading-shadow self-start md:ml-[20%]"
						style={{
							marginBottom: "5px",
						}}
					>
						RENDERLY
					</h1>
					<h1
						className="text-5xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl font-black italic tracking-wider hollow-text self-end md:mr-[20%]"
						data-text="STUDIO"
					>
						STUDIO
					</h1>
				</div>

				{/* Desktop: 3 images side by side */}
				<div className="hidden md:flex flex-1 py-15 px-15 justify-start">
					<img src={image1} alt="text" className="w-auto h-2/3 object-contain" />
				</div>
				<div className="hidden md:flex flex-1 py-15 px-5 justify-center items-center">
					<img src={image2} alt="text" className="w-auto h-2/3 object-contain" />
				</div>
				<div className="hidden md:flex flex-1 py-15 px-15 justify-end items-end">
					<img src={image3} alt="text" className="w-auto h-2/3 object-contain" />
				</div>

				{/* Mobile: center image with corner peeks */}
				<div className="md:hidden flex-1 flex justify-center items-center px-5">
					<img src={image2} alt="text" className="w-auto max-h-[60vh] object-contain" />
				</div>

				{/* Mobile: corner images */}
				<img
					src={image1}
					alt="text"
					className="md:hidden absolute top-0 left-0 w-40 h-40 sm:w-48 sm:h-48 object-cover object-bottom-right -translate-x-16 -translate-y-16 opacity-50 z-0"
				/>
				<img
					src={image3}
					alt="text"
					className="md:hidden absolute bottom-0 right-0 w-40 h-40 sm:w-48 sm:h-48 object-cover object-top-left translate-x-16 translate-y-16 opacity-50 z-0"
				/>
			</div>
		</div>
	);
}

export default App;
