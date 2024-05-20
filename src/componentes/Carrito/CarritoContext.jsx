import React, { createContext, useState } from 'react';
import Swal from 'sweetalert2';

export const CartContext = createContext(); 

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
  
    const addToCart = (product) => {
        const existingProductIndex = cart.findIndex((item) => item.id === product.id);
        if (existingProductIndex !== -1) {
            setCart(prevCart => {
                const updatedCart = [...prevCart];
                updatedCart[existingProductIndex] = { ...updatedCart[existingProductIndex], quantity: updatedCart[existingProductIndex].quantity + 1 };
                return updatedCart;
            });
        } else {
            setCart(prevCart => [...prevCart, { ...product, quantity: 1 }]);
        }
        Swal.fire({
            icon: 'success',
            title: 'Producto agregado al carrito',
            text: `${product.title} se añadió al carrito`,
            confirmButtonText: 'OK',
        });
    };
        
    return (
        <CartContext.Provider value={{ cart, addToCart }}>
            {children}
        </CartContext.Provider>
    );
};
