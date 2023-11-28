import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";

const GameGrid = () => {
	const { games, error, isLoading } = useGames();

	const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9];

	return (
		<>
			{error && <p>{error}</p>}
			<div className="grid grid-cols-1 justify-around gap-y-8 px-4 md:col-span-4 md:grid-cols-2 md:gap-x-7 lg:col-span-4 lg:grid-cols-3">
				{isLoading &&
					skeletons.map((skeleton) => (
						<GameCardContainer>
							<GameCardSkeleton key={skeleton} />
						</GameCardContainer>
					))}
				{games.map((game) => (
					<GameCardContainer>
						<GameCard key={game.id} game={game} />
					</GameCardContainer>
				))}
			</div>
		</>
	);
};

export default GameGrid;
