import React from 'react';
import { useParams } from 'react-router-dom';
import asyncMocks from '../async-mocks';

function ItemDetailContainer() {
  const { id } = useParams();

  const product = asyncMocks.find(item => item.id === id);

  return (
    <div>
      <h2>Detalles de {product.name}</h2>
      <p>Descripción: {product.description}</p>
    </div>
  );
}

export default ItemDetailContainer;
