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
      // url: process.env.DATABASE_URL,
      host: process.env.DB_HOST,
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,  
      // dialectOptions: { 
      //   ssl: { 
      //     require: true, 
      //     rejectUnauthorized: false 
      //   } 
      // },
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
