import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";

interface fetchResponseSchema<T> {
	count: number;
	results: T[];
}

const useData = <T>(
	endpoint: string,
	requestConfig?: AxiosRequestConfig,
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	deps?: any[],
) => {
	const [data, setData] = useState<T[]>([]);
	const [errors, setErrors] = useState("");
	const [loading, setLoading] = useState(false);

	useEffect(
		() => {
			const controller = new AbortController();

			setLoading(true);
			apiClient
				.get<fetchResponseSchema<T>>(endpoint, {
					signal: controller.signal,
					...requestConfig,
				})
				.then((res) => {
					setData(res.data.results);
					setLoading(false);
				})
				.catch((err) => {
					if (err instanceof CanceledError) return;
					setErrors(err.message);
					setLoading(false);
				});
			return () => controller.abort();
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		deps ? [...deps] : [],
	);

	return { data, errors, loading };
};

export default useData;
