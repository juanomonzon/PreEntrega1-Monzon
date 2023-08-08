import React from 'react';
import { useParams } from 'react-router-dom';
import asyncMocks from '../async-mocks';

function ItemListContainer() {
  const { id } = useParams();

  const filteredProducts = asyncMocks.filter(product => product.category === id);

  return (
    <div>
      <h2>{id.toUpperCase()}</h2>
      <ul>
        {filteredProducts.map(product => (
          <li key={product.id}>
            <h3>{product.name}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ItemListContainer;
