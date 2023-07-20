import React from 'react';

const CartWidget = () => {
  const cartItemsCount = 7; 
  return (
    <div className="cart-widget">
      <i className="fas fa-shopping-cart"></i>
      <span className="cart-notification">{cartItemsCount}</span>
    </div>
  );
};

export default CartWidget;
