import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import './index.css';

const App = () => {
  return (
    <div>
      <Navbar />
      <ItemListContainer greeting="¡Bienvenido a nuestra tienda en línea!" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
