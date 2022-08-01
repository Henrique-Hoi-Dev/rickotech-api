const { Sequelize } = require("sequelize");
require("dotenv").config()

import File from '../app/models/File';
import Product from '../app/models/Product';
import User from '../app/models/User';
import Adress from '../app/models/Adress';
import Order from '../app/models/Order';
import FinancialBox from '../app/models/FinancialBox';
import Service from '../app/models/Service';
// import dataBaseConfig from '../config/database'

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  dialectOptions: {
    // ssl: {
    //   // require: true,
    //   rejectUnauthorized: false
    // },
  },
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
});

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

models
.map((model) => model.init(sequelize))
.map(
  (model) => model.associate && model.associate(sequelize.models)
);

sequelize
  .authenticate()
  .then(() => console.log("Connection has been established successfully."))
  .catch((err) => console.error("Unable to connect to the database:", err));

export default sequelize;