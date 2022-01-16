const axios = require("axios");

exports.getAPI = async () => {
  try {
    const fetch = await axios.get("/ping");
    return fetch.data;
  } catch (error) {
    console.log(error);
  }
};

exports.getAllCharities = async () => {
  try {
    const fetch = await axios.get("/charities");
    return fetch.data;
  } catch (error) {
    console.log(error);
  }
};

exports.getCharitiesByClassification = async (classification) => {
  try {
    const fetch = await axios.get(`/charities/category/${classification}`);
    return fetch.data;
  } catch (error) {
    console.log(error);
  }
};

exports.getCharitiesByName = async (name) => {
  try {
    const fetch = await axios.get(`/charities/name/${name}`);
    return fetch.data;
  } catch (error) {
    console.log(error);
  }
};
