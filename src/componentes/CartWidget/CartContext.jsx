import React, { createContext, useContext, useState } from "react";
const CartContext = createContext();

export const useCartContext = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  
  const handleAdd = (item) => {
    console.log('agrega!');
    setCart([...cart, item]);
  };
  
  const handleRemove = (itemId) => { 
    console.log('remueve');
    const productIndex = cart.findIndex((item) => item.id === itemId);

    if (productIndex !== -1) {
        
      const updatedCart = [...cart];      
      const productToRemove = updatedCart[productIndex];

      if (productToRemove.stock > 1) {
                productToRemove.stock -= 1;
      } else {        
        updatedCart.splice(productIndex, 1);
      }
      
      setCart(updatedCart);
    }
  };
  
  const handleClear = () => {
    setCart([]);
  };

 
  return (
    <CartContext.Provider
      value={{
        cart, 
        handleAdd, 
        handleRemove,
        handleClear,
      }}
    >
      {children} 
    </CartContext.Provider>
  );
};
