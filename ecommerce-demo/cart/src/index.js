import { faker } from '@faker-js/faker';

const cartText = `<div>You have ${faker.datatype.number(10)} items in your cart</div>`;

document.querySelector('#dev-cart').innerHTML = cartText;
