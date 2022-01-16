const data = require("../data/data.json");

exports.getAll = () => {
  const charities = data;

  return charities;
};

exports.getByName = (name) => {
  const charities = data.filter((record) => record.name == name);

  return charities;
};

exports.getByClassification = (classification) => {
  const charities = data.filter(
    (record) => record.classification == classification
  );

  return charities;
};