const { listContacts } = require("../../services/contacts");

const getAll = async (req, res, next) => {
  const result = await listContacts(req.user, req.query);
  res.status(200).json({ status: "success", code: 200, result });
};

module.exports = getAll;
