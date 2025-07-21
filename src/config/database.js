const { Sequelize } = require('sequelize');
const config = require('./config');
const logger = require('./logger');

const sequelize = new Sequelize(config.db.name, config.db.user, config.db.password, {
    host: config.db.host,
    dialect: config.db.dialect,
    logging: false
});

const connectDB = async () => {
    try {
        await sequelize.authenticate();
        logger.info('MySQL connected');
    } catch (err) {
        logger.error('MySQL connection error:', err);
        process.exit(1);
    }
};

module.exports = {
    sequelize,
    connectDB
};
