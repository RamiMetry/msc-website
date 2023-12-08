import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url, authentication = false) => {
  const [data, setData] = useState(null);
  const [metadata, setMetadata] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const makeRequest = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
  });

  useEffect(() => {
    const fetch = async () => {
      try {
        if (url !== "") {
          setLoading(true);
          let res;
          if (authentication) {
            res = await axios
              .create({
                baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
                headers: {
                  Authorization: "bearer " + localStorage.getItem("jwt"),
                },
              })
              .get(url);
          } else res = await makeRequest.get(url);

          if (res.data.data) {
            setData(res.data.data);
            setMetadata(res.data.meta);
          }
        }
      } catch (err) {
        setError(true);
      }
      setLoading(false);
    };

    fetch();
  }, [url, authentication]);

  return { data, metadata, loading, error };
};

export default useFetch;
