import { createContext, useState } from "react";

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
export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addCartItems: () => {},
});
export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const addItemToCart = productAddTo => {
    setCartItems(addCartItem(cartItems, productAddTo));
  };
  const value = { isCartOpen, setIsCartOpen, cartItems, addItemToCart };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
