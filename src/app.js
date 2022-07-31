import express from 'express';
import path from 'path';
import routes from './routes';
import cors from 'cors';
import Sequelize from 'sequelize';

// import './database';

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
    this.sequelize = new Sequelize(process.env.DATABASE_URL, {
        dialectOptions: {
          ssl: {
            require: true,
            rejectUnauthorized: false
          }
        }
      }
    );

  this.sequelize
    .authenticate()
    .then(() => {
      console.log('Connection has been established successfully.');
    })
    .catch(err => {
      console.error('Unable to connect to the database:', err);
    });   
  }
}

export default new App().server;
