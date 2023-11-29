import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Genre {
	id: number;
	name: string;
}

interface FetchedGenresSchema {
	count: number;
	results: Genre[];
}

const useGenres = () => {
	const [genres, setGenres] = useState<Genre[]>([]);
	const [errors, setErrors] = useState("");
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const controller = new AbortController();

		setLoading(true);
		apiClient
			.get<FetchedGenresSchema>("/genres", { signal: controller.signal })
			.then((res) => {
				setGenres(res.data.results);
				setLoading(false);
			})
			.catch((err) => {
				if (err instanceof CanceledError) return;
				setLoading(false);
				setErrors(err.message);
			});
		return () => controller.abort();
	}, []);

	return { genres, errors, loading };
};

export default useGenres;
