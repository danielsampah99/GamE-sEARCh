import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import GenreListSkeleton from "./GenreListSkeleton";

interface Props {
	onSelectedGenre: (genre: Genre) => void;
	selectedGenre: Genre | null;
}

const GenreList = ({ onSelectedGenre, selectedGenre }: Props) => {
	const { data, loading, errors } = useGenres();

	if (errors) return null;

	if (loading) return <GenreListSkeleton />;

	return (
		<>
			<div>
				<h1 className="py-2 text-center text-3xl font-bold text-zinc-900 dark:text-gray-300">
					Genres
				</h1>
				<ul className="max-h-min  list-none pl-2">
					{data.map((genre) => (
						<li
							key={genre.id}
							className="group px-2 transition-all  duration-300 hover:rounded-md hover:bg-gray-200 dark:hover:bg-zinc-800"
						>
							<button
								onClick={() => onSelectedGenre(genre)}
								key={genre.id}
								className={`flex py-4 text-left  group-hover:text-zinc-500 dark:group-hover:text-white ${
									genre.id === selectedGenre?.id
										? "font-bold"
										: "font-normal"
								} `}
							>
								<img
									className="h-[32px] rounded-lg object-cover"
									src={getCroppedImageUrl(
										genre.image_background,
									)}
									alt={genre.slug}
								/>
								<p className={`ml-4 text-xl hover:underline`}>
									{genre.name}
								</p>
							</button>
						</li>
					))}
				</ul>
			</div>
		</>
	);
};

export default GenreList;
