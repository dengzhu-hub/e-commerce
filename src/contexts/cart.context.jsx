import { createContext, useReducer } from "react";
import { createAction } from "../utils/reducer/createAction";
/**
 * 将物品添加到购物车中去
 * @param cartItems  购物车当中已经有的产品
 * @param productAddTo  要添加的产品
 * @returns {*|[...*,(*&{quantity: number})]}
 * @author jackdeng
 */
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

/**
 * 创建Context
 * @type {React.Context<{setIsCartOpen: setIsCartOpen, cartCount: number, addCartItems: addCartItems, cartItems: *[], isCartOpen: boolean, removeItemFromCart: removeItemFromCart}>}
 */
export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addCartItems: () => {},
  removeItemFromCart: () => {},
  clearItemFromCart: () => {},
  cartCount: 0,
  cartTotal: 0,
});
const INITIALVALUE = {
  cartCount: 0,
  cartTotal: 0,
  cartItems: [],
  isCartOpen: false,
};
export const ACTIONS = {
  SET_CART_ITEMS: "set-cart-items",
  TOOGLE_CART_OPEN: "toogle-cart-open",
};
// Reducer
const cartReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case ACTIONS.SET_CART_ITEMS: {
      return {
        ...state,
        ...payload,
      };
    }
    case ACTIONS.TOOGLE_CART_OPEN: {
      return {
        ...state,
        isCartOpen: payload,
      };
    }
    default:
      throw new Error(`unhandled type of ${type} in cartRdeucer`);
  }
};

/**
 * 提供contextProvider
 * @param children
 * @returns {JSX.Element}
 * @constructor
 */
export const CartProvider = ({ children }) => {
  const [{ cartItems, cartCount, cartTotal, isCartOpen }, dispatch] =
    useReducer(cartReducer, INITIALVALUE);

  const updateCartItmeReudcer = newCartItems => {
    const newCartCount = newCartItems.reduce(
      (acc, item) => acc + item.quantity,
      0
    );
    const newCartTotal = newCartItems.reduce(
      (acc, item) => acc + item.quantity * item.price,
      0
    );
    dispatch(
      createAction(ACTIONS.SET_CART_ITEMS, {
        cartItems: newCartItems,
        cartCount: newCartCount,
        cartTotal: newCartTotal,
      })
    );
  };

  /**
   * 实现，cartCount的功能，添加产品
   * @param productAddTo
   */
  const addItemToCart = productAddTo => {
    const newCartItems = addCartItem(cartItems, productAddTo);
    updateCartItmeReudcer(newCartItems);
  };

  /**
   * 移除产品，如果一个产品有i多个数量就逐渐减少他。
   * @param productAddTo
   */
  const removeItemFromCart = productAddTo => {
    const newCartItems = removeItemCart(cartItems, productAddTo);
    updateCartItmeReudcer(newCartItems);
  };
  const clearItemFromCart = cartItemToClear => {
    const newCartItems = clearCartItem(cartItems, cartItemToClear);
    updateCartItmeReudcer(newCartItems);
  };
  const setIsCartOpen = bool => {
    dispatch({
      type: ACTIONS.TOOGLE_CART_OPEN,
      payload: bool,
    });
  };
  /**
     *generate newCartTotal

     generate newCartCount


     dispatch new action with payload {
      newCartItem
      newCartTotal
      newCartCount
     }
     */

  /* 与useState关联起来*/
  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    removeItemFromCart,
    clearItemFromCart,
    cartCount,
    cartTotal,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
