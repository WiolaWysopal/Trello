// name - nazwa, price - cena, number - ilość sztuk danego produktu, ID - numer identyfikacyjny produktu

export var productManager = 
{
    products: [
        { name: "Produkt A", price: 10.99, number: 5, ID: 1 },
        { name: "Produkt B", price: 25.50, number: 2, ID: 2 },
        { name: "Produkt C", price: 15.75, number: 8, ID: 3 }
    ],

    addProduct(name, price, number, ID) 
    {
        // Sprawdzenie poprawności danych wejściowych
        if (typeof name !== "string" || name.trim() === "") 
        {
            console.log("ERROR: 'name' must be a non-empty string!");
            return;
        }
        if (typeof price !== "number" || price <= 0) 
        {
            console.log("ERROR: 'price' must be greater than 0.0!");
            return;
        }
        if (typeof number !== "number" || number < 0) 
        {
            console.log("ERROR: 'number' must be a non-negative number.");
            return;
        }
        if (typeof ID !== "number" || !Number.isInteger(ID) || ID <= 0) 
        {
            console.log("ERROR: 'ID' must be a positive integer.");
            return;
        }
        
        // Sprawdzenie, czy produkt o podanym ID już istnieje
        if (this.products.some(p => p.ID === ID)) 
        {
            console.log(`ERROR: Product with ID ${ID} already exists!`);
            return;
        }

        // Dodanie produktu do listy
        this.products.push({ name, price, number, ID });
        console.log(`Product ${name} added successfully.`);
    },
    
    updateProduct(ID, newValue) 
    {
        // Znalezienie produktu o podanym ID
        const product = this.products.find(p => p.ID === ID);
        if (!product) 
        {
            console.log(`ERROR: Product with ID ${ID} does not exist.`);
            return;
        }

        // Walidacja nowych wartości przed aktualizacją
        if (newValue.name !== undefined) 
        {
            if (typeof newValue.name !== "string" || newValue.name.trim() === "") 
            {
                console.log("ERROR: 'name' must be a non-empty string.");
                return;
            }
        }
        if (newValue.price !== undefined) 
        {
            if (typeof newValue.price !== "number" || newValue.price <= 0) 
            {
                console.log("ERROR: 'price' must be greater than 0.0.");
                return;
            }
        }
        if (newValue.number !== undefined) 
        {
            if (typeof newValue.number !== "number" || newValue.number < 0) 
            {
                console.log("ERROR: 'number' must be a non-negative number.");
                return;
            }
        }

        // Aktualizacja wartości produktu
        Object.assign(product, newValue);
        console.log(`Product with ID ${ID} updated successfully.`);
    },

    deleteProduct(ID) 
    {
        const index = this.products.findIndex(p => p.ID === ID);
        if (index !== -1) 
        {
            this.products.splice(index, 1);
            console.log(`Product with ID ${ID} deleted successfully.`);
        } 
        else 
        {
            console.log(`ERROR: Product with ID ${ID} does not exist.`);
        }
    },

    calculateStockValue() 
    {
        let totalValue = 0.0;
        for (const product of this.products)
        {
            totalValue += product.price * product.number;
        }
        console.log(`Stock value: ${totalValue.toFixed(2)} PLN`);
        return totalValue;
    },

    applyDiscount(ID, discount)
    {
        const product = this.products.find(p => p.ID === ID);
        if (!product) 
        {
            console.log(`Product does not exist`); 
            return;
        } 
        if (typeof discount !== "number" || discount <= 0 || discount >= 100)
        {
            console.log("Discount must be a number between 0 and 100");
            return;
        }
        const discountAmount = (product.price * discount) / 100;
        product.price -= discountAmount;
        console.log(`New price of ${product.name}: ${product.price} (discount included)`);
    },
};

