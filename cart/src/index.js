import faker from "faker";

const cartText = `<div>You have ${faker.random.number()} items inside your cart</div>`;

document.querySelector("#cart-dev").innerHTML = cartText;
