import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface fetchResponseSchema<T> {
	count: number;
	results: T[];
}

const useData = <T>(endpoint: string) => {
	const [data, setData] = useState<T[]>([]);
	const [errors, setErrors] = useState("");
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const controller = new AbortController();

		setLoading(true);
		apiClient
			.get<fetchResponseSchema<T>>(endpoint, {
				signal: controller.signal,
			})
			.then((res) => {
				setData(res.data.results);
				setLoading(false);
			})
			.catch((err) => {
				if (err instanceof CanceledError) return;
				setLoading(false);
				setErrors(err.message);
			});
		return () => controller.abort();
	}, [endpoint]);

	return { data, errors, loading };
};

export default useData;
