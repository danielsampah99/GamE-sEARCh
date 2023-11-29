import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import GenreListSkeleton from "./GenreListSkeleton";

interface Props {
	onSelectedGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectedGenre }: Props) => {
	const { data, loading } = useGenres();

	return (
		<>
			{loading && <GenreListSkeleton />}
			<ul className="max-h-min list-none pl-4">
				{data.map((genre) => (
					<li key={genre.slug}>
						<button
							onClick={() => onSelectedGenre(genre)}
							key={genre.id}
							className="flex py-4 "
						>
							<img
								className="h-[32px] rounded-lg"
								src={getCroppedImageUrl(genre.image_background)}
								alt={genre.slug}
							/>
							<p className="ml-4 text-xl hover:underline ">
								{genre.name}
							</p>
						</button>
					</li>
				))}
			</ul>
		</>
	);
};

export default GenreList;
