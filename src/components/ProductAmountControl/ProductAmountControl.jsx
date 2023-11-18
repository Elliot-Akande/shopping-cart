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

  return (
    <div className={styles.div}>
      <button className={styles.left} onClick={decrement}>
        <RemoveIcon sx={{ color: "#fff", fontSize: "18px" }} />
      </button>
      <div className={styles.amount} aria-label="amount">
        {amount}
      </div>
      <button className={styles.right} onClick={increment}>
        <AddIcon sx={{ color: "#fff", fontSize: "18px" }} />
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
