import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";

const GameGrid = () => {
	const { data, errors, loading } = useGames();

	const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9];

	return (
		<>
			{errors && <p>{errors}</p>}
			<div className="grid grid-cols-1 justify-around gap-y-8 px-4 md:col-span-4 md:grid-cols-2 md:gap-x-7 lg:col-span-4 lg:grid-cols-3">
				{loading &&
					skeletons.map((skeleton) => (
						<GameCardContainer>
							<GameCardSkeleton key={skeleton} />
						</GameCardContainer>
					))}
				{data.map((game) => (
					<GameCardContainer>
						<GameCard key={game.id} game={game} />
					</GameCardContainer>
				))}
			</div>
		</>
	);
};

export default GameGrid;
