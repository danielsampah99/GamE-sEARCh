import genres from "../data/genres";
export interface Genre {
	id: number;
	name: string;
	image_background: string;
	slug: string;
}

const useGenres = () => ({ data: genres, loading: false, errors: null });

export default useGenres;
