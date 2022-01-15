import axios from "axios";

export const getAPI = () => {
  const fetch = axios
    .get("/ping")
    .then((result) => {
      return result.data;
    })
    .catch((error) => console.log(error));

  return fetch;
};