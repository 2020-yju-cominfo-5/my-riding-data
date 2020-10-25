const response = (res, status, message, data) => {
  const responseData = {
    message,
    data,
  };

  res.status(status).json(responseData);
};

module.exports = response;
