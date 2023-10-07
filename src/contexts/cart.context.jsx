import { createContext, useReducer } from "react";

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
  isCartOpen: true,
  setIsCartOpen: () => {},
  cartItems: [],
  addCartItems: () => {},
  removeItemFromCart: () => {},
  clearItemFromCart: () => {},
  cartCount: 0,
  cartTotal: 0,
});
const inititalValue = {
  cartCount: 0,
  cartTotal: 0,
  cartItems: [],
  isCartOpen: true,
};
// Reducer
const cartReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SET_CART_ITEMS": {
      return {
        ...state,
        ...payload,
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
    useReducer(cartReducer, inititalValue);

  const updateCartItmeReudcer = newCartItmes => {
    const newCartCount = newCartItmes.reduce(
      (acc, item) => acc + item.quantity,
      0
    );
    const newCartTotal = newCartItmes.reduce(
      (acc, item) => acc + item.quantity * item.price,
      0
    );
    dispatch({
      type: "SET_CART_ITEMS",
      payload: {
        cartItems: newCartItmes,
        cartCount: newCartCount,
        cartTotal: newCartTotal,
      },
    });
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
    setIsCartOpen: () => {},
    cartItems,
    addItemToCart,
    removeItemFromCart,
    clearItemFromCart,
    cartCount,
    cartTotal,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
