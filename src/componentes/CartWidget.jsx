import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';

const CartWidget = () => {
  return (
    <div className="cart-widget">
      <FiShoppingCart />
      <span className="item-count">5</span>
    </div>
  );
}

export default CartWidget;
