/** @format */

import add, {cart} from "./starter/shoppingCart.js";
add("pizza", 2);
add("pizza", 5);
add("pizza", 4);

console.log(cart);

// import cloneDeep from "./node_modules/lodash-es/cloneDeep.js";
import cloneDeep from "lodash-es";
// import cloneDeep from "lodash";

// cloneDeep

const state = {
  cart: [
    {product: "bread", quantity: 5},
    {product: "pizza", quantity: 5},
  ],
  user: {loggedIn: true},
};
const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);

state.user.loggedIn = false;
console.log(stateClone);

console.log(stateDeepClone);

if (module.hot) {
  module.hot.accept();
}
