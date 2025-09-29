import image1 from "./assets/image_3.png";
import image2 from "./assets/image_2.png";
import image3 from "./assets/image_1.png";
import Header from "./components/Header";

function App() {
	return (
		<div className="bg-black w-screen h-screen text-white flex relative">
			<Header />
			<div
				className="
							absolute
							inset-0
							z-20
							flex
							flex-col
							justify-center
							items-center
						"
			>
				<h1
					className="text-8xl font-extrabold italic tracking-wider"
					style={{
						alignSelf: "flex-start",
						marginLeft: "20%",
						marginBottom: "5px",
						// Added a distinct offset shadow
						textShadow: "8px 8px 0px rgba(0, 0, 0, 0.2)",
					}}
				>
					RENDERLY
				</h1>
				<h1
					// Removed inline styles and added a class for the hollow effect
					className="text-8xl font-extrabold italic tracking-wider hollow-text"
					data-text="STUDIO"
					style={{
						alignSelf: "flex-end",
						marginRight: "20%",
					}}
				>
					STUDIO
				</h1>
			</div>

			<div className="flex-1  py-15 px-15 flex justify-start">
				<img src={image1} alt="text" className="w-auto h-2/3 " />
			</div>
			<div className="flex-1  py-15 px-5 flex justify-center items-center">
				<img src={image2} alt="text" className="w-auto h-2/3" />
			</div>
			<div className="flex-1  py-15 px-15 flex justify-end items-end">
				<img src={image3} alt="text" className="w-auto h-2/3" />
			</div>
		</div>
	);
}

export default App;
