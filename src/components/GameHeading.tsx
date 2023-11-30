import { GameQuery } from "../App";

interface Props {
	gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
	const heading = `${gameQuery.platform?.name || ""} ${
		gameQuery.genre?.name || ""
	} Games`;

	return (
		<div>
			<h1 className="py-3 text-center text-5xl font-bold text-zinc-900 dark:text-gray-300">
				{heading}
			</h1>
		</div>
	);
};

export default GameHeading;
