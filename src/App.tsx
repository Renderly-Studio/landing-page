import Header from "./components/Header";
import Hero from "./components/Hero";
import ImageGrid from "./components/ImageGrid";

function App() {
	return (
		<div className="bg-black w-screen h-screen text-white relative overflow-hidden">
			<Header />
			<Hero />
			<ImageGrid />
		</div>
	);
}

export default App;
