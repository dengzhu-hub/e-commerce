import { createAction } from '../../utils/reducer/createAction';
import { CART_ACTIONS_TYPE } from './cart.type';
export const setIsCartOpen = bool =>
  createAction(CART_ACTIONS_TYPE.SET_CART_OPEN, bool);
const addCartItem = (cartItems, productAddTo) => {
  //find it item contains productToAdd
  const existingCartItem = cartItems.find(item => item.id === productAddTo.id);
  console.log(existingCartItem);

  // if found , increment  quantity
  if (existingCartItem) {
    return cartItems.map(item =>
      item.id === productAddTo.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  }
  // return new array with modified cart items/ new cart items
  return [...cartItems, { ...productAddTo, quantity: 1 }];
};
const removeItemCart = (cartItems, productToRemove) => {
  // find the item to remove
  const isExistingCartItem = cartItems.find(
    cartItem => cartItem.id === productToRemove.id
  );
  // is the item quantity is 1, remove item.
  if (isExistingCartItem.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== productToRemove.id);
  }
  // return back the left cartItem
  return cartItems.map(cartItem =>
    cartItem.id === productToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
const clearCartItem = (cartItems, cartItemToClear) =>
  cartItems.filter(cartItem => cartItem.id !== cartItemToClear.id);

export const addItemToCart = (cartItems, productAddTo) => {
  const newCartItems = addCartItem(cartItems, productAddTo);
  return createAction(CART_ACTIONS_TYPE.SET_CART_ITEMS, newCartItems);
};

/**
 * 移除产品，如果一个产品有i多个数量就逐渐减少他。
 * @param productAddTo
 */
export const removeItemFromCart = (cartItems, productAddTo) => {
  const newCartItems = removeItemCart(cartItems, productAddTo);
  return createAction(CART_ACTIONS_TYPE.SET_CART_ITEMS, newCartItems);
};
export const clearItemFromCart = (cartItems, cartItemToClear) => {
  const newCartItems = clearCartItem(cartItems, cartItemToClear);
  return createAction(CART_ACTIONS_TYPE.SET_CART_ITEMS, newCartItems);
};
