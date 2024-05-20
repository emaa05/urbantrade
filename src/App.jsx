import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavComponente from './componentes/NavBar/NavComponente';
import ProductList from './componentes/ProductsView/ProductsList';
import Carrito from './componentes/Carrito/Carrito';
import SingleProd from './componentes/Detalles/Detalles';
import { CartProvider } from './componentes/Carrito/CarritoContext';

function App() {
  return (
    <CartProvider>
      <Router>
        <NavComponente />
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/category/:category" element={<ProductList />} />
          <Route path="/cart" element={<Carrito />} />
          <Route path="/product/:proId" element={<SingleProd />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
