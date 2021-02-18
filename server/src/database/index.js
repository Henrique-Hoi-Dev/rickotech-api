import Sequelize from 'sequelize';
import File from '../app/models/File';
import Product from '../app/models/Product';
import User from '../app/models/User';

import databaseConfig from '../config/database';

const models = [User, File, Product];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connetion = new Sequelize(databaseConfig);

    models
      .map((model) => model.init(this.connetion))
      .map(
        (model) => model.associate && model.associate(this.connetion.models)
      );
  }
}

export default new Database();
