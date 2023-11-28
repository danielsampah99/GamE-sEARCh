import { useState, useEffect } from "react";
import apiClient from "../services/api-client";

const GameGrid = () => {
	interface Game {
		id: number;
		name: string;
	}

	interface FetchedGamesSchema {
		count: number;
		results: Game[];
	}

	const [games, setGames] = useState<Game[]>([]);
	const [error, setError] = useState("");

	useEffect(() => {
		apiClient
			.get<FetchedGamesSchema>("/games")
			.then((res) => setGames(res.data.results))
			.catch((err) => setError(err.message));
	}, []);

	return (
		<>
			{error && <p>{error}</p>}
			<ul>
				{games.map((game) => (
					<li key={game.id}>{game.name}</li>
				))}
			</ul>
		</>
	);
};

export default GameGrid;
