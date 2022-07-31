require('dotenv/config');

module.exports = {
  production: {
    url: process.env.DATABASE_URL,
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    },
  },
  development: {
    dialect: 'postgres',
    host: process.env.POST_HOST,
    username: process.env.POST_USER,
    password: process.env.POST_PASS,
    database: process.env.POST_NAME,

    define: {
      timestamps: true,
      underscored: true,
      underscoredAll: true,
    },
  },
};
