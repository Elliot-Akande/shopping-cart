import React from "react";
import PropTypes from "prop-types";
import Price from "../Price/Price";
import ProductAmountControl from "../ProductAmountControl/ProductAmountControl";

function CartItem({ item, amount, setAmount, remove, modify }) {
  const { image, title, price } = item;

  return (
    <div>
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <button onClick={remove}>Delete</button>
      <Price price={price} />
      <ProductAmountControl amount={amount} setAmount={setAmount} />
    </div>
  );
}

CartItem.propTypes = {};

export default CartItem;
