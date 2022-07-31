require('dotenv/config');

module.exports = {
  dialect: 'postgres',
  url: process.env.DATABASE_URL,
  // host: process.env.POST_HOST,
  // username: process.env.POST_USER,
  // password: process.env.POST_PASS,
  // database: process.env.POST_NAME,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  },
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
