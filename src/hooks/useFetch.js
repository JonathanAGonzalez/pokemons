import { useEffect, useState } from "react";
import axios from "axios";

let initialState = {
  loading: true,
  data: null,
  error: null,
};

export const useFetch = (url) => {
  const [values, setValues] = useState(initialState);

  useEffect(() => {
    axios
      .get(url)
      .then((resp) => resp.data)
      .then((data) => {
        setValues((prevCurrent) => ({
          ...prevCurrent,
          loading: false,
          data,
        }));
      })
      .catch((err) => console.error(err));
  }, [url]);

  return values;
};
