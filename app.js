// app.js
const express = require('express');
const ProductManager = require('./ProductManager');

const productManager = new ProductManager();
const app = express();
const PORT = 3000; 

// Endpoint 
app.get('/products', (req, res) => {
    
    const limit = req.query.limit;
    const products = limit ? productManager.getAllProducts().slice(0, limit) : productManager.getAllProducts();

    // Respuesta JSON
    res.json({ products });
});

// Endpoint  ID
app.get('/products/:pid', (req, res) => {
    const productId = req.params.pid;
    const product = productManager.getProductById(productId);
    res.json({ product });
});
app.listen(PORT, () => {
    console.log(`Servidor Express, puerto: ${PORT}`);
});
