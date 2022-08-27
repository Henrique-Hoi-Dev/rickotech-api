import FinancialBoxService from '../../service/FinancialBoxService'

class FinancialBoxController {
  async store(req, res) {
    try {
      let response;     
      response = await FinancialBoxService.store(req.body, req.params);
      return res.status(200).send(response);
    } catch (error) {
      return res.status(400).json({ mgs: error.message})
    }
  }
  async index(req, res) {
    try {
      let response;      
      response = await FinancialBoxService.index(req.params);
      return res.status(200).send(response);
    } catch (error) {
      return res.status(400).json({ mgs: error.message})
    }
    
  }
  async open(req, res) {
    try {
      let response;      
      response = await FinancialBoxService.open(req.params);
      return res.status(200).send(response);
    } catch (error) {
      return res.status(400).json({ mgs: error.message})
    }
  }
  async getId(req, res) {
    try {
      let response;      
      response = await FinancialBoxService.getId(req.params);
      return res.status(200).send(response);
    } catch (error) {
      return res.status(400).json({ mgs: error.message})
    }
  }
  async update(req, res) {
    try {
      let response;
      response = await FinancialBoxService.update(req.body, req.params);
      return res.status(200).send(response);
    } catch (error) {
      return res.status(400).json({ mgs: error.message})
    }
  }
}
export default new FinancialBoxController();
