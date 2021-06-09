import { useState } from "react";

const useApi = (apiFunc) => {
  const [data, setData] = useState([]);
  const [isLoding, setIsLoding] = useState(false);
  const [hasError, setHasError] = useState(false);

  const request = async (...args) => {
    setIsLoding(true);
    const responce = await apiFunc(...args);
    setIsLoding(false);

    if (!responce.ok) return setHasError(true);

    setHasError(false);
    setData(responce.data);
  };

  return { request, data, setData, hasError, isLoding };
};

export default useApi;
