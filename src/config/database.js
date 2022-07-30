require('dotenv/config');

module.exports = {
  dialect: 'postgres',
  url: "postgres://uvsgatgknbjnsb:b53b1a6a840eea327cb8060a62f9dce12f46d7fa566a94ef1b42eb2495e14d46@ec2-52-204-157-26.compute-1.amazonaws.com:5432/daldkdnf8tud4d",
  // host: "ec2-52-204-157-26.compute-1.amazonaws.com",
  // username: "uvsgatgknbjnsb",
  // password: "b53b1a6a840eea327cb8060a62f9dce12f46d7fa566a94ef1b42eb2495e14d46",
  // database: "daldkdnf8tud4d",
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
