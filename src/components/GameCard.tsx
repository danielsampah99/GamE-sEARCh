import { Game } from "../hooks/useGames";
import CriticScore from "./CriticScore";
import PlatformIconsList from "./PlatformIconsList";

interface Props {
	game: Game;
}

const GameCard = ({ game }: Props) => {
	return (
		<>
			<div className=" rounded-lg shadow-lg overflow-hidden">
				<img src={game.background_image} alt={game.name} />
				<div className="p-3">
					<h2 className="subpixel-antialiased mb-2 text-xl text-zinc-800 sm:text-center font-medium ">{game.name}</h2>
					<div className="flex flex-row justify-between">
						<PlatformIconsList platforms={game.parent_platforms.map(p => p.platform)}/>
						<CriticScore score={game.metacritic}/>
					</div>
				</div>
			</div>
		</>
	);
};

export default GameCard;
