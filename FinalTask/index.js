import {productManager} from "./ProductManagement.js";
import {orderManager} from "./orderManager.js"

productManager.calculateStockValue();
productManager.applyDiscount(1, 10);
//productManager.addProduct("Produkt D", 0, 4, 4); // VALIDATION ERROR
productManager.addProduct("Produkt D", 30, 4, 4);
productManager.calculateStockValue();
orderManager.orderProcessing(2, 1)
    .then(console.log)
    .catch(console.error);

