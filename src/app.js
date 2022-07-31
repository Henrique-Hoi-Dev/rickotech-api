import express from 'express';
import path from 'path';
import routes from './routes';
import cors from 'cors';
import Sequelize from 'sequelize';
import File from './app/models/File';
import Product from './app/models/Product';
import User from './app/models/User';
import Adress from './app/models/Adress';
import Order from './app/models/Order';
import FinancialBox from './app/models/FinancialBox';
import Service from './app/models/Service';
require('dotenv/config');

// import './database';
// console.log(process.env.DATABASE_URL)
const models = [ 
  User, 
  Adress, 
  Product, 
  File, 
  Order, 
  FinancialBox, 
  Service
];

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
    this.init();
  }

  middlewares() {
    this.server.use(cors());
    this.server.use(express.json());
    this.server.use(
      '/files',
      express.static(path.resolve(__dirname, '..', 'tmp', 'uploads'))
    );
  }

  routes() {
    this.server.use(routes);
  }

  init() {
    this.sequelize = new Sequelize({
      dialect: 'postgres',
      // url: process.env.DATABASE_URL,
      host: "ec2-100-26-39-41.compute-1.amazonaws.com",
      username: "osrdpskuytgofk",
      password: "f020f68ea56a4d562292ba2061ad991e268c3f7167c9d99ffcbecbce96211377",
      database: "d9rtqhip5f3dmt",
      dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false
        }
      }
    },
  );

  this.sequelize
    .authenticate()
    .then(() => {
      console.log('Connection has been established successfully.');
    })
    .catch(err => {
      console.error('Unable to connect to the database:', err);
    });
    
    models
    .map((model) => model.init(this.connetion))
    .map(
      (model) => model.associate && model.associate(this.connetion.models)
    )
  }
}

export default new App().server;
