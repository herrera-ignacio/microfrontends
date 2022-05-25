import { faker } from '@faker-js/faker';

console.log("[INFO] From Cart!");

const cartText = `<div>You have ${faker.datatype.number(10)} items in your cart</div>`;

document.querySelector('#dev-cart').innerHTML = cartText;
