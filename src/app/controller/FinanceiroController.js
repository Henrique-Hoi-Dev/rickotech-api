import * as Yup from 'yup';
import Financeiro from '../models/Financeiro';

class FinanceiroController {
  async store(req, res) {
    const schema = Yup.object().shape({
      valor: Yup.string(),
      valor_pendente: Yup.string(),
      valor_parcelas: Yup.string(),
      parcelas: Yup.string(),
      valor_desconto: Yup.string(),
      valor_total_venda: Yup.string(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Falha na validação' });
    }

    const venda = await Financeiro.create(req.body);

    return res.json(venda);
  }
}

export default new FinanceiroController();
