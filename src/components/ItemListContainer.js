import React from 'react';

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="item-list-container">
            <h2>{greeting}</h2>
            <p>
              Descubre nuestra amplia selección de cámaras fotográficas y
              objetivos de alta calidad.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemListContainer;
