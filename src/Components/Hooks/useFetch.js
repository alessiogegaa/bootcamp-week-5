import { useEffect, useState } from "react";

export const useFetch = (baseUrl, params) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const queryString = new URLSearchParams(params).toString();
        console.log(queryString);
        const response = await fetch(`${baseUrl}?${queryString}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [baseUrl, JSON.stringify(params)]); 

  return { data, error, isLoading };
};
