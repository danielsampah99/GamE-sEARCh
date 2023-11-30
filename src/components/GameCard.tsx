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
			<div className="shadow:md dark:shadow-zinc-950/40">
				<img
					src={getCroppedImageUrl(game.background_image)}
					alt={game.name}
				/>
				<div className="p-3 dark:bg-zinc-900 dark:text-zinc-300">
					<div className="flex flex-row justify-between">
						<PlatformIconsList
							platforms={game.parent_platforms.map(
								(p) => p.platform,
							)}
						/>
						<CriticScore score={game.metacritic} />
					</div>
					<h2 className="mb-2 text-xl font-medium text-zinc-800 subpixel-antialiased dark:text-zinc-300 sm:text-center ">
						{game.name}
					</h2>
				</div>
			</div>
		</>
	);
};

export default GameCard;
