const data = require("../data/data.json");

exports.getAll = () => {
  const charities = data;

  return charities;
};

exports.getByName = (name) => {
  const filter = name.toLowerCase();
  const charities = data.filter((item) =>
    item.name.toLowerCase().includes(filter)
  );

  return charities;
};

exports.getByClassification = (classification) => {
  const filter = classification.toLowerCase();
  const charities = data.filter((item) =>
    item.name.toLowerCase().includes(filter)
  );

  return charities;
};
