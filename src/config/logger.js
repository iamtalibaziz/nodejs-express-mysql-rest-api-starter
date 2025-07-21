const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.printf(info => {
      let log = `${info.timestamp}: ${info.level}: ${info.message}`;
      if (info.stack) {
        log += `\n${info.stack}`;
      }
      return log;
    })
  ),
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.printf(info => {
          let log = `${info.timestamp}: ${info.level}: ${info.message}`;
          if (info.stack) {
            log += `\n${info.stack}`;
          }
          return log;
        })
      ),
    }),
  ],
});

module.exports = logger;
