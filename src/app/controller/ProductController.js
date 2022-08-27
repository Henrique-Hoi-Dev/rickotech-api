import ProductsService from '../../service/ProductService'

class ProductController {
  async store(req, res) {
    try {
      let response;     
      response = await ProductsService.store(req.body);
      return res.status(200).send(response);
    } catch (error) {
      return res.status(400).json({ mgs: error.message});
    }
  }
  async index(req, res) {
    try {
      let response;      
      response = await ProductsService.index(req, res);
      return res.status(200).send(response);
    } catch (error) {
      return res.status(400).json({ mgs: error.message});
    }
  }
  async getId(req, res) {
    try {
      let response;      
      response = await ProductsService.getId(req.params);
      return res.status(200).send(response);
    } catch (error) {
      return res.status(400).json({ mgs: error.message});
    }
  }
  async update(req, res) {
    try {
      let response;
      response = await ProductsService.update(req.params, req.body);
      return res.status(200).send(response);
    } catch (error) {
      return res.status(400).json({ mgs: error.message});
    }
  }
  async delete(req, res) {
    try {
      let response;     
      response = await ProductsService.delete(req.params);
      return res.status(200).send(response);
    } catch (error) {
      return res.status(400).json({ mgs: error.message});
    }
  }
}
export default new ProductController();
