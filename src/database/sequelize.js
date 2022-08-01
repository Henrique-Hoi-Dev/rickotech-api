const { Sequelize } = require("sequelize");

import File from '../app/models/File';
import Product from '../app/models/Product';
import User from '../app/models/User';
import Adress from '../app/models/Adress';
import Order from '../app/models/Order';
import FinancialBox from '../app/models/FinancialBox';
import Service from '../app/models/Service';
import dataBaseConfig from '../config/database'

const sequelize = new Sequelize(dataBaseConfig.production);

//check connection (optional)
const models = [ 
  User, 
  Adress, 
  Product, 
  File, 
  Order, 
  FinancialBox, 
  Service
];

sequelize
  .authenticate()
  .then(() => console.log("Connection has been established successfully."))
  .catch((err) => console.error("Unable to connect to the database:", err));

  models
    .map((model) => model.init(sequelize))
    .map(
      (model) => model.associate && model.associate(sequelize.models)
    );

export default sequelize;