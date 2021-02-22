import Sequelize, { Model } from 'sequelize';

class Financeiro extends Model {
  static init(sequelize) {
    super.init(
      {
        valor: Sequelize.STRING,
        valor_desconto: Sequelize.STRING,
        valor_pendente: Sequelize.STRING,
        valor_parcela: Sequelize.STRING,
        parcelas: Sequelize.STRING,
        tipo_parcelas: Sequelize.STRING,
        produto_id: Sequelize.INTEGER,
      },
      {
        sequelize,
        timestamps: true,
      }
    );
    return this;
  }
  static associate(models) {
    this.belongsTo(models.Product, { foreignKey: 'produto_id', as: 'produto' });
  }
}

export default Financeiro;
