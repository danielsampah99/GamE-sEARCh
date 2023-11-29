import useGenres from "../hooks/useGenres";

const GenreList = () => {
	const { genres } = useGenres();

	return (
		<>
			<ul>
				{genres.map((item) => (
					<li key={item.id}>{item.name}</li>
				))}
			</ul>
		</>
	);
};

export default GenreList;
