const winston = require('winston');
const commonConfig = require('../config/common.config');

const logger = winston.createLogger({
  level: 'verbose',
  format: winston.format.colorize(),
  defaultMeta: { service: 'Template' },
  transports: [
    //
    // - Write all logs with importance level of `error` or less to `error.log`
    // - Write all logs with importance level of `info` or less to `combined.log`
    //
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
});

if (commonConfig.nodeEnvironment !== 'production') {
  logger.add(
    new winston.transports.Console({
      format: winston.format.simple(),
    })
  );
}

module.exports = logger;
