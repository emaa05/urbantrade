import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavComponente from './componentes/NavBar/NavComponente';
import ProductsList from './componentes/ProductsView/ProductsList';

function App() {
  return (
    <Router>
      <div className="App">
        <NavComponente />
        <Routes>
          <Route path="/Ropa" element={<ProductsList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
