import React from 'react';
import ReactDOM from 'react-dom';
import NavComponentes from './componentes/NavComponente.jsx';
import ItemListContainer from './componentes/ItemListContainer.jsx';

const App = () => {
  return (
    <div>
      <NavComponentes />
      <ItemListContainer greeting="Bienvenido a nuestra tienda en línea" />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
