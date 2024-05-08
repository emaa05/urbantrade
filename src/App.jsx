import React from 'react';
import NavComponente from './componentes/NavComponente.jsx';
import ItemListContainer from './componentes/ItemListContainer.jsx';

function App() {
  return (
    <div className="App">
      <NavComponente />
      <ItemListContainer greeting="¡Hola desde ItemListContainer!" />
    </div>
  );
}

export default App;
