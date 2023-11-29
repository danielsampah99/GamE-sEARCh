import { useState } from "react";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";
import { Genre } from "./hooks/useGenres";

function App() {
	const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

	return (
		<>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5">
				<NavBar />
				<div className="hidden  lg:grid">
					<GenreList
						onSelectedGenre={(genre) => setSelectedGenre(genre)} selectedGenre={selectedGenre} />
				</div>
				<GameGrid selectedGenre={selectedGenre} />
			</div>
		</>
	);
}

export default App;
