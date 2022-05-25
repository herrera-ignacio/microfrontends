import { mountProducts } from 'products/ProductsIndex';
import { mountCart } from 'cart/CartShow';

console.log("[INFO] From container!");

mountProducts(document.querySelector('#product-list'));
mountCart(document.querySelector('#my-cart'));
