import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import GenreListSkeleton from "./GenreListSkeleton";

const GenreList = () => {
	const { data, loading } = useGenres();

	return (
		<>
			{loading && <GenreListSkeleton />}
			<ul className="max-h-min list-none pl-4">
				{data.map((genre) => (
					<li key={genre.slug}>
						<div key={genre.id} className="flex py-4">
							<img
								className="h-[32px] rounded-lg"
								src={getCroppedImageUrl(genre.image_background)}
								alt={genre.slug}
							/>
							<p className="ml-4 text-xl">{genre.name}</p>
						</div>
					</li>
				))}
			</ul>
		</>
	);
};

export default GenreList;
