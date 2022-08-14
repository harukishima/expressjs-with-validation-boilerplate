const express = require('express');
const errorHandlerMiddleware = require('./middlewares/error-handler.middleware');
require('dotenv').config();

const app = express();
const configRoute = require('./route');
const config = require('./config');
const logger = require('./utils/logger');
const port = config.common.port;

app.use(express.json());

configRoute(app);

app.use((req, res) => {
  res.status(404).json({
    message: 'Not Found',
  });
});

app.use(errorHandlerMiddleware);

app.listen(port, () => {
  logger.info(`Server is listening to ${port}`);
});
