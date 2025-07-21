require('dotenv').config();

const config = {
    port: process.env.PORT || 5000,
    db: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        name: process.env.DB_NAME,
        dialect: process.env.DB_DIALECT
    },
    jwt_secret: process.env.JWT_SECRET
};

module.exports = config;
