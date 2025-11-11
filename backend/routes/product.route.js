import express from 'express';
import { getAllProducts, createProduct, getProductById, updateProduct, deleteProduct } from '../controller/product.controller.js';

const route = express.Router();

// get all products
route.get('/', getAllProducts);


//get single products by id
route.get('/:id', getProductById);


// create a product
route.post('/', createProduct);

// update product by id
route.put('/:id', updateProduct);


// delete product by id
route.delete('/:id', deleteProduct);

export default route;   