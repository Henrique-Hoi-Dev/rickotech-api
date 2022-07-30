require('dotenv/config');

module.exports = {
  dialect: 'postgres',
  url: process.env.DATABASE_URL,
  // host: "ec2-52-204-157-26.compute-1.amazonaws.com",
  // username: "uvsgatgknbjnsb",
  // password: "b53b1a6a840eea327cb8060a62f9dce12f46d7fa566a94ef1b42eb2495e14d46",
  // database: "daldkdnf8tud4d",
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
