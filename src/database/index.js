import Sequelize from 'sequelize';
import File from '../app/models/File';
import Product from '../app/models/Product';
import User from '../app/models/User';
import Adress from '../app/models/Adress';
import Order from '../app/models/Order';
import FinancialBox from '../app/models/FinancialBox';
import Service from '../app/models/Service';

require('dotenv').config();

const models = [ 
  User, 
  Adress, 
  Product, 
  File, 
  Order, 
  FinancialBox, 
  Service
];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connetion = new Sequelize({
      dialect: 'postgres',
      // host: process.env.DB_HOST,
      // username: process.env.DB_USER,
      // password: process.env.DB_PASS,
      // database: process.env.DB_NAME,  
      host: process.env.POST_HOST,
      username: process.env.POST_USER,
      password: process.env.POST_PASS,
      database: process.env.POST_NAME,  
      define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true,
      },
    });

    models
      .map((model) => model.init(this.connetion))
      .map(
        (model) => model.associate && model.associate(this.connetion.models)
      );
  }
}

export default new Database();
