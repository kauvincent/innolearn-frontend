import { useState, useEffect } from "react";

interface UseFetchOptions {
  immediate?: boolean;
}

export const useFetch = <T>(
  fetchFn: () => Promise<T>,
  dependencies: any[] = [],
  options: UseFetchOptions = { immediate: true }
) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const execute = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const result = await fetchFn();
      setData(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (options.immediate) {
      execute();
    }
  }, dependencies);

  return {
    data,
    loading,
    error,
    refetch: execute,
  };
};