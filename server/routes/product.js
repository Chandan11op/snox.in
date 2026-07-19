import express from 'express';
// TEMPORARY MOCK FOR UI REDESIGN
// Restore MongoDB implementation later.
// import Product from '../models/product.js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();

// Load mock products
const mockProductsPath = path.join(__dirname, '../mock/products.json');
const getMockProducts = () => {
    try {
        return JSON.parse(fs.readFileSync(mockProductsPath, 'utf8'));
    } catch (err) {
        console.error("Error reading mock data:", err);
        return [];
    }
};

// Get all products
router.get('/', async (req, res) => {
    try {
        // const product = await Product.find();
        const product = getMockProducts();
        res.json(product);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get a specific product by id
router.get('/:productId', async (req, res) => {
    try {
        // const product = await Product.findById(req.params.productId);
        const products = getMockProducts();
        const product = products.find(p => p._id === req.params.productId);
        if (!product) {
            return res
                .status(404)
                .send({ error: 'product entry not found' });
        }
        res.send(product);
    } catch (err) {
        console.error(err);
        res.status(500).send({ error: 'Internal server error' });
    }
});

// Create a new user (product)
router.post('/', async (req, res) => {
    try {
        /*
        const product = new Product({
            title: req.body.title,
            desc: req.body.desc,
            photo: req.body.photo,
            category: req.body.category,
        });
        const newProduct = await product.save();
        */
        const newProduct = {
            _id: Math.random().toString(36).substr(2, 9),
            title: req.body.title,
            desc: req.body.desc,
            photo: req.body.photo,
            category: req.body.category,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            __v: 0
        };
        res.status(201).json(newProduct);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});


// Update an existing user (product)
router.patch('/:productId', async (req, res) => {
    try {
        /*
        const product = await Product.findByIdAndUpdate(req.params.productId, req.body);
        */
        const products = getMockProducts();
        const product = products.find(p => p._id === req.params.productId);
        
        if (!product) {
            return res.status(404).send({ error: 'product entry not found' });
        }
        // Mock returning the updated object
        const updatedProduct = { ...product, ...req.body, updatedAt: new Date().toISOString() };
        res.send(updatedProduct);
    } catch (err) {
        console.error(err);
        res.status(400).send({ error: 'Invalid input data' });
    }
});


// Delete a product entry
router.delete('/:productId', async (req, res) => {
    try {
        /*
        const product = await Product.findByIdAndDelete(req.params.productId);
        */
        const products = getMockProducts();
        const product = products.find(p => p._id === req.params.productId);
        if (!product) {
            return res.status(404).send({ error: 'Product detail not found' });
        }

        res.send({ message: "Details deleted successfully." });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: err.message });
    }
});

export default router;