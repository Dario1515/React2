import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addItem = (item, quantity) => {
        if (isInCart(item.id)) {
            // Si ya existe, actualizar cantidad
            const updatedCart = cart.map(prod => {
                if (prod.id === item.id) {
                    return { ...prod, quantity: prod.quantity + quantity };
                }
                return prod;
            });
            setCart(updatedCart);
        } else {
            // Si no existe, agregar nuevo producto
            setCart([...cart, { ...item, quantity }]);
        }
    };

    const removeItem = (id) => {
        const filteredCart = cart.filter(item => item.id !== id);
        setCart(filteredCart);
    };

    const clear = () => {
        setCart([]);
    };

    const isInCart = (id) => {
        return cart.some(item => item.id === id);
    };

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clear }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;
