import { faker } from '@faker-js/faker';

const mountCart = (elem) => {
  console.log("[INFO] Mounting cart...");

  if (elem) {
    const cartText = `<div>You have ${faker.datatype.number(10)} items in your cart</div>`;
    elem.innerHTML = cartText;
  }
};

if (process.env.NODE_ENV === 'development') {
  const devElem = document.querySelector('#dev-cart');
  
  if (devElem) {
    mountCart(devElem);
  }
}

export { mountCart };
