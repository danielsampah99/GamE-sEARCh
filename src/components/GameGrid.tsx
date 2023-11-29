import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../hooks/useGenres";

interface Props {
	selectedGenre: Genre | null;
}

const GameGrid = ({ selectedGenre }: Props) => {
	const { data, errors, loading } = useGames(selectedGenre);

	const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9];

	return (
		<>
			{errors && <p>{errors}</p>}
			<div className="grid grid-cols-1 justify-around gap-y-8 px-4 md:col-span-4 md:grid-cols-2 md:gap-x-7 lg:col-span-4 lg:grid-cols-3">
				{loading &&
					skeletons.map((skeleton) => (
						<GameCardContainer key={skeleton}>
							<GameCardSkeleton />
						</GameCardContainer>
					))}
				{data.map((game) => (
					<GameCardContainer key={game.id}>
						<GameCard key={game.id} game={game} />
					</GameCardContainer>
				))}
			</div>
		</>
	);
};

export default GameGrid;
