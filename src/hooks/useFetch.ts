import { useEffect, useState } from 'react';
import Api from "../api/core";

interface FetchResponse<T> {
    data: T | null;
    loading: boolean;
    error: string | null;
  }

export const useFetch = <T>(url: string): FetchResponse<T> => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      const api = new Api(window.location.origin + "/database");
      const response = await api.get<T>(url + ".json");

      if (response.error) {
        setError(response?.message || "");
      } else {
        setData(response.data);
      }
      setLoading(false);
    };

    fetchData();
  }, [url]);


  return { data, loading, error }
}