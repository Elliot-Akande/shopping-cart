import CloseIcon from "@mui/icons-material/Close";
import PropTypes from "prop-types";
import CartItem from "../CartItem/CartItem";
import Price from "../Price/Price";
import styles from "./Cart.module.css";

function Cart({ isCartOpen, toggleCart, cart, setCart, removeItem, products }) {
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

  const handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) toggleCart();
  };

  return (
    <div
      className={isCartOpen ? styles.containerOpen : styles.container}
      onClick={handleBackgroundClick}
    >
      <aside className={isCartOpen ? styles.asideOpen : styles.aside}>
        <div className={styles.top}>
          <h1 className={styles.h1}>SHOPPING BAG</h1>
          <button
            className={styles.close}
            onClick={toggleCart}
            aria-label="close"
          >
            <CloseIcon sx={{ color: "#1a1a1a", fontSize: "32px" }} />
          </button>
        </div>
        <div className={styles.middle}>
          {cart.length === 0 && (
            <p className={styles.p}>No items have been added to your bag.</p>
          )}
          {cart.map((item) => (
            <CartItem
              key={item.id}
              amount={item.amount}
              toggleCart={toggleCart}
              item={products.find((product) => product.id === item.id)}
              setAmount={(amount) => setAmount(item.id, amount)}
              remove={() => removeItem(item.id)}
            />
          ))}
        </div>
        {cart.length > 0 && (
          <div className={styles.bottom}>
            <h2 className={styles.h2}>
              <span>SUBTOTAL:</span>
              <Price price={calcTotal()} />
            </h2>
            <button className={styles.checkout}>CHECKOUT</button>
          </div>
        )}
      </aside>
    </div>
  );
}

Cart.propTypes = {
  isCartOpen: PropTypes.bool,
  toggleCart: PropTypes.func,
  cart: PropTypes.arrayOf(PropTypes.object),
  setCart: PropTypes.func,
  removeItem: PropTypes.func,
  products: PropTypes.arrayOf(PropTypes.object),
};

export default Cart;
