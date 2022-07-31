import Sequelize from 'sequelize';
import File from '../app/models/File';
import Product from '../app/models/Product';
import User from '../app/models/User';
import Adress from '../app/models/Adress';
import Order from '../app/models/Order';
import FinancialBox from '../app/models/FinancialBox';
import Service from '../app/models/Service';
require('dotenv/config');

// import dataBaseConfig from '../config/database'

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
    this.connetion  = new Sequelize(process.env.DATABASE_URL, {
          dialectOptions: {
            ssl: {
              require: true,
              rejectUnauthorized: false
            }
          }
        }
      );

      this.connetion 
        .authenticate()
        .then(() => {
          console.log('Connection has been established successfully.');
        })
        .catch(err => {
          console.error('Unable to connect to the database:', err);
        });

    // this.connetion = new Sequelize(dataBaseConfig.production);

    models
      .map((model) => model.init(this.connetion))
      .map(
        (model) => model.associate && model.associate(this.connetion.models)
      );
  }
}

export default new Database();
