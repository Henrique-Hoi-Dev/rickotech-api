import Sequelize, { Model } from 'sequelize';

class Financeiro extends Model {
  static init(sequelize) {
    super.init(
      {
        valor: Sequelize.STRING,
        valor_pendente: Sequelize.STRING,
        valor_total: Sequelize.STRING,
      },
      {
        sequelize,
        timestamps: true,
      }
    );
    return this;
  }
}

export default Financeiro;
