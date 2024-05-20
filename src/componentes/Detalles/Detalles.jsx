import { useParams } from "react-router-dom";
import { getProduct } from "../asyncMock";
import { useEffect, useState, useContext } from "react";
import { CartContext } from "../Carrito/CarritoContext";

export default function SingleProd() {
    const { addToCart } = useContext(CartContext);
    const { proId } = useParams();
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        const fetchProduct = async () => {
            const fetchedProduct = await getProduct(proId);
            setProduct(fetchedProduct);
        };
        fetchProduct();
    }, [proId]);

    const handleAddToCart = () => {
        if (product) {
            addToCart({ ...product, quantity: quantity });
        }
    };
    

    const handleIncreaseQuantity = () => {
        setQuantity(quantity + 1);
    };

    const handleDecreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    if (!product) {
        return <div>Cargando...</div>;
    }

    return (
        <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
            <div className="list-group-item d-flex flex-column text-center mb-5" style={{ maxWidth: '200px' }}>
                <h3>{product.title}</h3>
                <img src={product.img} alt={product.title} />
                <p>Precio: {product.price}</p>
                <div className="d-flex justify-content-center align-items-center">
                    <button onClick={handleDecreaseQuantity}>-</button>
                    <p>{quantity}</p>
                    <button onClick={handleIncreaseQuantity}>+</button>
                </div>
                <button onClick={handleAddToCart}>Agregar al Carrito</button>
            </div>
        </div>
    );
}
