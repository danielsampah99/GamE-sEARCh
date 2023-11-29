import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";

function App() {
	return (
		<>
			<div className="grid grid-cols-1 md:grid-cols-5">
				<NavBar />
				<div className="hidden bg-yellow-500 text-white md:col-auto md:grid">
					<GenreList />
				</div>
				<GameGrid />
			</div>
		</>
	);
}

export default App;
