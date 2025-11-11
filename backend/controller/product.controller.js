import mongoose from 'mongoose';
import Product from '../model/product.model.js';

//Get all products
export const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json({ success: true, message: "Product List", products });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Server Error', error: error.message });
    }
}
//Get product by ID
export const getProductById = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id || !mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ success: false, message: 'Invalid Product ID' });
        }
        const product = await Product.findById(id);
        if (!product) {
            return res.status(404).json({ success: false, message: 'Product Not Found' });
        }
        res.status(200).json({ success: true, message: "Requested Product.", product });

    } catch (error) {
        res.status(500).json({ success: false, message: 'Server Error', error: error.message });
    }
}
//Create a product
export const createProduct = async (req, res) => {
    try {
        const { name, price, description } = req.body;
        const newProduct = new Product({ name, price, description });
        await newProduct.save();
        res.status(201).json({ success: true, message: "Product Added Successfully..", product: newProduct });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Server Error', error: error.message });
    }
}
//Update product by ID
export const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id || !mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ success: false, message: 'Invalid Product ID' });
        }
        const result = await Product.findByIdAndUpdate(id, req.body, { new: true });
        if (!result) {
            return res.status(404).json({ success: false, message: 'Product Not Found' });
        }
        res.status(200).json({ success: true, message: 'Product Updated Successfully', product: result });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Server Error', error: error.message });
    }
}
//Delete product by ID
export const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id || !mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ success: false, message: 'Invalid Product ID' });
        }
        const result = await Product.findByIdAndDelete(id);
        if (!result) {
            return res.status(404).json({ success: false, message: 'Product Not Found' });
        }
        res.status(200).json({ success: true, message: 'Product Deleted Successfully' });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Server Error', error: error.message });
    }
}   
