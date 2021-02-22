import * as Yup from 'yup';
import Financeiro from '../models/Financeiro';

class FinanceiroController {
  async store(req, res) {
    const schema = Yup.object().shape({
      valor: Yup.string().required(),
      tipo_pagamento: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Falha na validação' });
    }

    // const descontoExist = await Product.findOne({
    //   where: { name: req.body.values.valor_desconto },
    // });

    // if (descontoExist) {
    //   return res.status(400).json({ error: 'Esse Produto já existe.' });
    // }

    // console.log(venda);

    const venda = await Financeiro.create(req.body);

    return res.json(venda);
  }
}

export default new FinanceiroController();
