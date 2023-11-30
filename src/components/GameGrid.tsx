import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { GameQuery } from "../App";

interface Props {
	gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
	const { data, errors, loading } = useGames(gameQuery);

	const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9];

	if (errors) return <p>{errors}</p>;

	return (
		<div className="grid gap-5 pr-3 md:grid-cols-2 lg:grid-cols-3 lg:pr-2">
			{loading &&
				skeletons.map((skeleton) => (
					<GameCardContainer key={skeleton}>
						<GameCardSkeleton />
					</GameCardContainer>
				))}
			{data.map((game) => (
				<GameCardContainer key={game.id}>
					<GameCard game={game} />
				</GameCardContainer>
			))}
		</div>
	);
};

export default GameGrid;
