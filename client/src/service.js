const axios = require("axios");

exports.getAPI = () => {
  const fetch = axios
    .get("/ping")
    .then((result) => {
      return result.data;
    })
    .catch((error) => console.log(error));

  return fetch;
};

exports.getCharitiesByClassification = (classification) => {
  const fetch = axios
    .post(`/charities/${classification}`)
    .then((result) => {
      return result.data;
    })
    .catch((error) => console.log(error));

  return fetch;
};
