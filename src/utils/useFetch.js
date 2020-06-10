import { useEffect, useState } from "react";
import axios from 'axios';
const proxyurl = "https://cors-anywhere.herokuapp.com/";

export const useFetch = (url) => {
  const [response, setResponse] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_BASE}/api/${url}`)
        setResponse(res.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, [url])
  return { response, setResponse }
};