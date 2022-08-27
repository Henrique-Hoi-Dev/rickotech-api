import * as Yup from 'yup';
import Product from "../app/models/Product";

import { v4 } from 'uuid'
import httpStatus from 'http-status-codes';

export default {
  async store(req, res) {
    let result = {}

    const { name, price, category, quantity, description, images } = req

    const product_images = images.map((res) => ({ id: v4(), img: res }))

    const body = { name, price, category, quantity, description, product_images }

    const schema = Yup.object().shape({
      name: Yup.string().required().max(100),
      price: Yup.number().required(),
    });

    if (!(await schema.isValid(body))) {
      return result = {httpStatus: httpStatus.NOT_FOUND, status: "validation failed", responseData: []} 
    }

    const products = await Product.create(body);

    result = {httpStatus: httpStatus.OK, status: "Success", responseData: products}    
    return result
  },

  async index(req, res) {
    let result = {}
    
    const { page = 1, limit = 100, sort_order = 'ASC', sort_field = 'name' } = req.query;
    const total = (await Product.findAll()).length;

    const totalPages = Math.ceil(total / limit);

    const products = await Product.findAll({
      order: [[ sort_field, sort_order ]],
      limit: limit,
      offset: (page - 1) ? (page - 1) * limit : 0,
      attributes: [ 
        'id', 
        'name',
        'price', 
        'category',
        'quantity', 
        'description',
        'product_images',
      ],
    });

    const currentPage = Number(page)

    result = {total, totalPages, currentPage, products}
    return result
  },

  async getId(req, res) {
    let product = await Product.findByPk(req.id, {
      attributes: [ 
        'id', 
        'name', 
        'price',
        'category',
        'quantity', 
        'description',
        'product_images',
      ],
    });

    return product
  },

  async update(req, res) {
    let result = {}

    const product = await Product.findByPk(req.id);

    const { name, price, category, quantity, description, images } = res

    const product_images = images.map((res) => ({ id: v4(), img: res }))

    const body = { name, price, category, quantity, description, product_images }

    const productUpdated = await product.update(body);

    result = {httpStatus: httpStatus.OK, status: "Success", responseData: productUpdated}    
    return result
  },

  async delete(req, res) {
    let result = {}
    const id  = req.id;

    const products = await Product.destroy({
      where: {
        id: id,
      },
    });

    if (!products) {
      return res.status(400).json({ message: 'product not found' });
    }

    result = {httpStatus: httpStatus.OK, status: "successful", responseData: products}      
    return result
  }
}
