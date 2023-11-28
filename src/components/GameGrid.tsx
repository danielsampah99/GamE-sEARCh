import useGames from "../hooks/useGames";
import GameCard from "./GameCard";

const GameGrid = () => {
	const { games, error } = useGames();

	return (
		<>
			{error && <p>{error}</p>}
			<div className="grid grid-cols-1 justify-around gap-y-8 px-4 md:col-span-4 md:grid-cols-2 md:gap-x-7 lg:col-span-4 lg:grid-cols-3">
				{games.map((game) => (
					<GameCard key={game.id} game={game} />
				))}
			</div>
		</>
	);
};

export default GameGrid;
