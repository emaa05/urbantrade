import React, { useState, useEffect, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProducts } from '../asyncMock';
import { CartContext } from '../Carrito/CarritoContext';

const ProductList = () => {
  const { addToCart } = useContext(CartContext);
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const productsData = await getProducts;
      if (category) {
        setProducts(productsData.filter(product => product.category === category));
      } else {
        setProducts(productsData);
      }
    };
    fetchProducts();
  }, [category]);

  return (
    <div className="container mt-4">
      <div className="row">
        {products.map(product => (
          <div key={product.id} className="col-md-4 mb-4">
            <div className="card h-100">
              <img src={product.img} className="card-img-top" alt={product.title} />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">Price: ${product.price}</p>
                <button className='btn btn-primary btn-lg' onClick={() => addToCart(product)}>Añadir al Carrito</button>
                <Link to={`/product/${product.id}`}><button className='btn btn-info btn-lg ml-4'>Detalles</button></Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
