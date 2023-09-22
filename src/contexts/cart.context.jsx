import { createContext, useEffect, useState } from "react";

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
  cartCount: 0,
});
export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  useEffect(() => {
    const newCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
    setCartCount(newCartCount);
  }, [cartItems]);
  const addItemToCart = productAddTo => {
    setCartItems(addCartItem(cartItems, productAddTo));
  };
  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    cartCount,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
