import PropTypes from "prop-types";
import styles from "./ProductAmountControl.module.css";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

function ProductAmountControl({
  amount,
  setAmount,
  handleIncrement,
  handleDecrement,
}) {
  const increment = handleIncrement || (() => setAmount(amount + 1));
  const decrement = handleDecrement || (() => setAmount(amount - 1));

  const handleChange = (e) => {
    const { value } = e.target;
    if (!isNaN(parseInt(value, 10))) {
      setAmount(parseInt(value, 10));
    } else {
      setAmount(value);
    }
  };

  return (
    <div className={styles.div}>
      <button className={styles.left} onClick={decrement}>
        <RemoveIcon sx={{ color: "#fff" }} />
      </button>
      <input
        className={styles.input}
        type="number"
        name="amount"
        value={amount}
        onChange={handleChange}
        min={1}
      />
      <button className={styles.right} onClick={increment}>
        <AddIcon sx={{ color: "#fff" }} />
      </button>
    </div>
  );
}

ProductAmountControl.propTypes = {
  amount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  setAmount: PropTypes.func.isRequired,
  handleIncrement: PropTypes.func,
  handleDecrement: PropTypes.func,
};

export default ProductAmountControl;
