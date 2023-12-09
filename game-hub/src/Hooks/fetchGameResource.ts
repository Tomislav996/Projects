import { CanceledError } from "axios";
import { useState, useEffect } from "react";
import apiClient from "../Services/api-client";

interface FetchResponse<T> {
  results: T[];
}

const fetchGameResource = <T>(id: string | number, endpoint: string) => {
  const [data, setData] = useState<T[] | null>(null);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    apiClient
      .get<FetchResponse<T>>(`games/${id}/${endpoint}`, {
        signal: controller.signal,
      })
      .then((response) => {
        setData(response.data.results); 
        setLoading(false);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, [id, endpoint]);

  return { data, error, isLoading };
};

export default fetchGameResource;
