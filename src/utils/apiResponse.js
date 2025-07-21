const sendResponse = (res, statusCode, success, data, messages) => {
  const response = {
    success,
    ...data,
  };
  if (messages) {
    response.messages = Array.isArray(messages) ? messages : [messages];
  }
  res.status(statusCode).send(response);
};

module.exports = sendResponse;
