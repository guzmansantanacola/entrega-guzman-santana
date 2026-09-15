/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";

const CartContext = createContext(null);

export const CartProvider = ({ children }) => {

  const [cart, setCart] = useState([]);

  const addToCart = (product, quantity = 1) => {
    const item = cart.find(({ id }) => id === product.id);
    const currentQuantity = item?.quantity || 0;

    if (!product.stock || quantity < 1 || currentQuantity + quantity > product.stock) {
      return false;
    }

    setCart((current) =>
      item
        ? current.map((entry) =>
            entry.id === product.id
              ? { ...entry, quantity: entry.quantity + quantity }
              : entry,
          )
        : [...current, { ...product, quantity }],
    );
    return true;
  };

  const removeFromCart = (productId) =>
    setCart((current) => current.filter(({ id }) => id !== productId));


  const updateQuantity = (productId, quantity) => {
    if (quantity < 1) return removeFromCart(productId);
    setCart((current) =>
      current.map((item) =>
        item.id === productId
          ? { ...item, quantity: Math.min(quantity, item.stock) }
          : item,
      ),
    );
  };

  const clearCart = () => setCart([]);

  const value = {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    totalItems: cart.reduce((total, item) => total + item.quantity, 0),
    totalPrice: cart.reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    ),
  };
  
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};


export const useCart = () => {
  const context = useContext(CartContext);
  if (!context)
    throw new Error("useCart debe utilizarse dentro de CartProvider");
  return context;
};
