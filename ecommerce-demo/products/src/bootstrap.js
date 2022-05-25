import { faker } from '@faker-js/faker';

const mountProducts = (elem) => {
    console.log("[INFO] Mounting Products...");
    let products = '';

    for (let i = 0; i < 5; i++) {
      const name = faker.commerce.productName();
      products += `<div>${name}</div>`;
    }

    if (elem) {
      elem.innerHTML = products;
    }
}

if (process.env.NODE_ENV === 'development') {
  const devElem = document.querySelector('#dev-products');

  if (devElem) {
    mountProducts(devElem);
  }
}

export { mountProducts };
