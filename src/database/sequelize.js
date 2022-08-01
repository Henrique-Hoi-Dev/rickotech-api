const { Sequelize } = require("sequelize");

import dataBaseConfig from '../config/database'

const sequelize = new Sequelize(dataBaseConfig.development);

//check connection (optional)
sequelize
  .authenticate()
  .then(() => console.log("Connection has been established successfully."))
  .catch((err) => console.error("Unable to connect to the database:", err));

export default sequelize;