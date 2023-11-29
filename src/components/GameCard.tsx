import { Game } from "../hooks/useGames";
import getCroppedImageUrl from "../services/image-url";
import CriticScore from "./CriticScore";
import PlatformIconsList from "./PlatformIconsList";

interface Props {
	game: Game;
}

const GameCard = ({ game }: Props) => {
	return (
		<>
			<div>
				<img
					src={getCroppedImageUrl(game.background_image)}
					alt={game.name}
				/>
				<div className="p-3">
					<h2 className="mb-2 text-xl font-medium text-zinc-800 subpixel-antialiased sm:text-center ">
						{game.name}
					</h2>
					<div className="flex flex-row justify-between">
						<PlatformIconsList
							platforms={game.parent_platforms.map(
								(p) => p.platform,
							)}
						/>
						<CriticScore score={game.metacritic} />
					</div>
				</div>
			</div>
		</>
	);
};

export default GameCard;
