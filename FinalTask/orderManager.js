import { productManager } from './ProductManagement.js';

export const orderManager = 
{
    // dostęp do zawsze aktualnej listy produktów:
    get products() 
    {
        return productManager.products;
    },
    
    // quantity - ilość sztuk produktu, które klient chce kupić;
    // funkcja przetrwarza proces zakupu produktu o danym ID w ilości quantity
    orderProcessing(ID, quantity) 
    {
        return new Promise((resolve, reject) =>
        {
            setTimeout(() => 
            {
                const product = this.products.find(p => p.ID=== ID);
                if (!product)
                {
                    reject(`ERROR: Product with ID: ${ID} does not exist.`);
                    return;
                }

                if (product.number < quantity)
                {
                    reject(`ERROR: Not enough stock for product ${product.name}`);
                    return;
                }

                product.number -= quantity;
                resolve(`Order processed succesfully\n ${quantity} x ${product.name} ordered.`);
            // symulacja opóźnienia
            }, Math.random() * 1000 + 1000);
        })
    }
};