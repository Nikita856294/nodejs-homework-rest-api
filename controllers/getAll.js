const { listContacts } = require("../services");

const getAll = async (req, res, next) => {
  const result = await listContacts();
  res.status(200).json({ result });
};

module.exports = getAll;
