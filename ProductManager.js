const fs = require('fs/promises'); 

class ProductManager {
    constructor(filePath) {
        this.filePath = filePath;
    }

    async getAllProducts() { // Lee el contenido del archivo de productos y pasar JSON
        try {
            
            const data = await fs.readFile(this.filePath, 'utf-8');
            
            const products = JSON.parse(data);
            return products;
        } catch (error) {
            console.error('Error al leer el archivo de productos:', error.message);
            return [];
        }
    }

    async getProductById(productId) {
        try {
            const data = await fs.readFile(this.filePath, 'utf-8');
            const products = JSON.parse(data);

            // Busca ID
            const product = products.find(p => p.id === productId);

            if (product) {
                return product;
            } else {
                throw new Error(`Producto con ID ${productId} no encontrado`);
            }
        } catch (error) {
            console.error('Error al leer el archivo de productos o al buscar por ID:', error.message);
            throw error;
        }
    }
}
module.exports = ProductManager;
