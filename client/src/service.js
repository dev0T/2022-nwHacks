const axios = require("axios");

exports.getAPI = async () => {
  try {
    const fetch = await axios.get("/ping");
    return fetch;
  } catch (error) {
    console.log(error);
  }
};

exports.getAllCharities = async () => {
  try {
    const fetch = await axios.get("/charities");
    return fetch;
  } catch (error) {
    console.log(error);
  }
};

exports.getCharitiesByClassification = async (classification) => {
  try {
    const fetch = await axios.get(`/charities/${classification}`);
    return fetch;
  } catch (error) {
    console.log(error);
  }
};

exports.getCharitiesByName = async (name) => {
  try {
    const fetch = await axios.get(`/charities/${name}`);
    return fetch;
  } catch (error) {
    console.log(error);
  }
};
