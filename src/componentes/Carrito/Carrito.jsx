import React, { useContext, useEffect } from 'react';
import { CartContext } from './CarritoContext';

const Carrito = () => {
    const { cart } = useContext(CartContext);

    const CalcularTotal = () => {
        if (cart.length === 0) {
            return 0;
        }
        const total = cart.reduce((accumulator, product) => accumulator + product.price * product.quantity, 0);
        return total;
    };

    useEffect(() => {
    }, [cart]);

    return (
        <div className="d-flex flex-column align-items-center mt-5">
            <h2 className="mb-5">Carrito</h2>
            {cart.length === 0 ? (
                <p>El carrito está vacío.</p>
            ) : (
                <ul className="d-flex flex-wrap">
                    {cart.map((product, index) => (
                        <li key={index} className="list-group-item d-flex flex-column me-3 mb-3" style={{ maxWidth: '200px' }}>
                            <img src={product.img} alt={product.title} style={{ width: '100px', height: '100px', marginRight: '20px' }} />
                            <div>{product.title} - ${product.price} Cantidad: {product.quantity}</div>
                            <button className="btn btn-dark btn-sm mt-2">Comprar</button>
                            <button className="btn btn-danger btn-sm mt-2">Cancelar</button>
                        </li>
                    ))}
                </ul>
            )}

            <div className="bg-light p-3 mt-3">
                <h3>Precio Total</h3>
                <p>${CalcularTotal()}</p>
            </div>
        </div>
    );
};

export default Carrito;
