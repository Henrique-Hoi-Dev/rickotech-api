import UserService from '../../service/UserService';

class UserController {
  async store(req, res) {
    try {
      let response;     
      response = await UserService.store(req.body);
      return res.send(response);
    } catch (error) {
      return res.status(200).json({ mgs: error.message})
    }
  }
  async index(req, res) {
    try {
      let response;      
      response = await UserService.index();
      return res.send(response);
    } catch (error) {
      return res.status(200).json({ mgs: error.message})
    }
  }
  async getId(req, res) { 
    try {
      let response;      
      response = await UserService.getId(req.params);
      return res.send(response);
    } catch (error) {
      return res.status(200).json({ mgs: error.message})
    }
  }
  async update(req, res) {
    try {
      let response;
      response = await UserService.update(req.body, req.params);
      return res.send(response);
    } catch (error) {
      return res.status(200).json({ mgs: error.message})
    }
  }
  async delete(req, res) {
    try {
      let response;     
      response = await UserService.delete(req.params);
      return res.send(response);
    } catch (error) {
      return res.status(200).json({ mgs: error.message})
    }
  }
}
export default new UserController();
