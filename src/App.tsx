import GameGrid from "./components/GameGrid";
import NavBar from "./components/NavBar";

function App() {
	return (
		<>
			<div className="grid grid-cols-1 md:grid-cols-2">
				<NavBar />
				<div className=" hidden bg-yellow-500 text-white md:grid md:w-auto">
					Aside
				</div>
				<GameGrid />
			</div>
		</>
	);
}

export default App;
