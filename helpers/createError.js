const errors = {
  400: "Bad Request",
  404: "Not found",
};

const createError = (status, message = errors[status]) => {
  const error = new Error(message);
  error.status = status;
  return error;
};

module.exports = createError;
