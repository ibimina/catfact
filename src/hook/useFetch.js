import { useState, useEffect } from "react";
export default function useFetch(url) {
  const [loading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [catFact, setCatFact] = useState([]);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      setError(false);
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error(res.statusText);
      }
      const randomFact = await res.json();
      setIsLoading(false);
      setCatFact(randomFact,new Date());
    } catch (error) {
      setIsLoading(false);
      setError("could not fetch data");
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return { loading, error, catFact, fetchData };
}
