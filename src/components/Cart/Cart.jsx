import React from "react";
import PropTypes from "prop-types";
import CartItem from "../CartItem/CartItem";
import Price from "../Price/Price";

function Cart({ toggleCart, cart, setCart, removeItem, products }) {
  const setAmount = (id, amount) => {
    if (amount < 1) {
      removeItem(id);
      return;
    }

    const updated = [...cart];
    const index = updated.findIndex((item) => item.id === id);
    updated[index].amount = amount;
    setCart(updated);
  };

  const calcTotal = () => {
    return cart.reduce((acc, item) => {
      const product = products.find((prod) => prod.id === item.id);
      const price = item.amount * product.price;
      return acc + price;
    }, 0);
  };

  return (
    <aside>
      <div>
        <h1>SHOPPING BAG</h1>
        <button onClick={toggleCart}>X</button>
      </div>
      <div>
        {cart.map((item) => (
          <CartItem
            key={item.id}
            item={products.find((product) => product.id === item.id)}
            amount={item.amount}
            setAmount={(amount) => setAmount(item.id, amount)}
            remove={() => removeItem(item.id)}
          />
        ))}
      </div>
      <div>
        <div>
          <h2>
            <span>SUBTOTAL:</span>
            <Price price={calcTotal()} />
          </h2>
          <button>CHECKOUT</button>
        </div>
      </div>
    </aside>
  );
}

Cart.propTypes = {};

export default Cart;
