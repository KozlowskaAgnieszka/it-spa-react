import { useEffect, useState } from 'react';

export function useFetch(fetchFn, initialValue) {
  const [isLoading, setIsLoading] = useState();
  const [error, setError] = useState();
  const [fetchedData, setfetchedData] = useState(initialValue);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);

      try {
        const data = await fetchFn();

        setfetchedData(data);
      } catch (error) {
        setError({
          message: error.message || 'Failed to fetch data.',
        });
      }

      setIsLoading(false);
    }

    fetchData();
  }, [fetchFn]);

  return {
    isLoading,
    error,
    fetchedData,
  };
}
