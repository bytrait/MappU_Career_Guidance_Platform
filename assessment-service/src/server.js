const app = require('./app');
const logger = require('./utils/logger.util');

const PORT = process.env.PORT || 4002;

app.listen(PORT, () => {
  logger.info(`Assessment Service running on port ${PORT}`);
});
