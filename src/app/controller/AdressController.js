import AdressService from "../../service/AdressService";

class AdressController {
  async store(req, res) {
    try {
      let response;     
      response = await AdressService.store(req.body, req.params);
      return res.status(200).send(response);
    } catch (error) {
      return res.status(400).json({ mgs: error.message})
    }
    
  }
  async getId(req, res) {
    try {
      let response;      
      response = await AdressService.getId(req.params);
      return res.status(200).send(response);
    } catch (error) {
      return res.status(400).json({ mgs: error.message})
    }
    
  }
  async update(req, res) {
    try {
      let response;
      response = await AdressService.update(req.params, req.body);
      return res.status(200).send(response);
    } catch (error) {
      return res.status(400).json({ mgs: error.message})
    }
    
  }
  async delete(req, res) {
    try {
      let response;     
      response = await AdressService.delete(req.params);
      return res.status(200).send(response);
    } catch (error) {
      return res.status(400).json({ mgs: error.message})
    }
  }
}
export default new AdressController();