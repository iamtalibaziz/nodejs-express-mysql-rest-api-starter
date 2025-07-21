class ApiError extends Error {
  constructor(statusCode, messages, isOperational = true, stack = '') {
    super(Array.isArray(messages) ? messages.join(', ') : messages);
    this.statusCode = statusCode;
    this.messages = Array.isArray(messages) ? messages : [messages];
    this.isOperational = isOperational;
    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

module.exports = ApiError;
