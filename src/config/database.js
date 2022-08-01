import "dotenv/config"
 
 export const production = {
    url: process.env.DATABASE_URL,
    dialect: 'postgres',
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
  }

  export const development = {
    dialect: 'postgres',
    url: process.env.DATABASE_LOCAL_URL,
    define: {
      timestamps: true,
      underscored: true,
      underscoredAll: true,
    },
  }

