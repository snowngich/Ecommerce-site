import Product from './product.js';
import asyncHandler from 'express-async-handler';

// Get all products
export const getProducts = asyncHandler(async (req, res) => {
    const products = await Product.find();
    res.json(products);
});

// Get single product
export const getProductById = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
        res.json(product);
    } else {
        res.status(404);
        throw new Error('Product not found');
    }
});

// Add product
export const addProduct = asyncHandler(async (req, res) => {
    const { name, price, description, category, stock } = req.body;
    const product = await Product.create({ name, price, description, category, stock });
    res.status(201).json(product);
});
