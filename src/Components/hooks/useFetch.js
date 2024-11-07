import { useState, useEffect } from "react";

export const useFetch = ({ url}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
       
        const res = await fetch(url);

        if (!res.ok) {
          throw new Error('Error');
        }

        const result = await res.json();
        setData(result);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

      fetchData();
  }, [url]);

  return { data, loading, error };
};