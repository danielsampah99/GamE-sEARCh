import { useState } from "react";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";
import { Genre } from "./hooks/useGenres";
import { Platform } from "./hooks/useGames";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

export interface GameQuery {
	genre: Genre | null;
	platform: Platform | null;
	sortOrder: string;
	searchText: string;
}

function App() {
	const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

	return (
		<>
			<div className="w-screen bg-gray-100 dark:bg-zinc-800">
				<NavBar
					onSearch={(searchText) =>
						setGameQuery({ ...gameQuery, searchText })
					}
				/>
				<div className="mt-12  pt-7 lg:ml-2 lg:flex ">
					<aside className="mr-3 hidden w-auto rounded-lg pr-2 text-lg dark:text-zinc-400 lg:block lg:bg-white dark:lg:bg-zinc-700">
						<GenreList
							onSelectedGenre={(genre) =>
								setGameQuery({ ...gameQuery, genre })
							}
							selectedGenre={gameQuery.genre}
						/>
					</aside>
					<main className="w-full rounded-lg bg-white px-3 dark:bg-zinc-700 lg:col-span-full lg:mr-2">
						<GameHeading gameQuery={gameQuery} />
						<div className="flex flex-row  sm:justify-between md:justify-start">
							<PlatformSelector
								selectedPlatform={gameQuery.platform}
								onSelectPlatform={(platform) =>
									setGameQuery({ ...gameQuery, platform })
								}
							/>
							<SortSelector
								sortOrder={gameQuery.sortOrder}
								onSelectSortOrder={(sortOrder) =>
									setGameQuery({ ...gameQuery, sortOrder })
								}
							/>
						</div>
						<GameGrid gameQuery={gameQuery} />
					</main>
				</div>
			</div>
		</>
	);
}

export default App;
