require('dotenv').config();

console.log(process.env.DATABASE_URL)

module.exports = {
  dialect: 'postgres',
  url: process.env.DATABASE_URL,
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
