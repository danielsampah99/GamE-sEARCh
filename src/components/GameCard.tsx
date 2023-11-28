import { Game } from "../hooks/useGames";

interface Props {
	game: Game;
}

const GameCard = ({ game }: Props) => {
	return (
		<>
			<div className=" rounded-lg shadow-lg overflow-hidden">
				<img src={game.background_image} alt={game.name} />
				<div className="p-3">
					<h2 className="subpixel-antialiased text-xl sm:text-center font-medium ">{game.name}</h2>
				</div>
			</div>
		</>
	);
};

export default GameCard;
