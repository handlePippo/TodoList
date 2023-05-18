import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setError } from "../Store/error";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { error } = useSelector((state) => state.error);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const { data } = await axios.get(url);
        setData(data);
      } catch (error) {
        dispatch(setError(error.message));
      }
      setIsLoading(false);
    })();
  }, [url, dispatch]);

  return { data, error, isLoading };
};

export default useFetch;
