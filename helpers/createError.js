const errors = {
  400: "Bad Request",
  401: "Unauthorized",
  404: "Not found",
  409: "Conflict",
};

const createError = (status, message = errors[status]) => {
  const error = new Error(message);
  error.status = status;
  return error;
};

module.exports = createError;
