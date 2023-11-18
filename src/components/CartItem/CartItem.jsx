import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useNavigate } from "react-router-dom";
import Price from "../Price/Price";
import ProductAmountControl from "../ProductAmountControl/ProductAmountControl";
import styles from "./CartItem.module.css";

function CartItem({ item, amount, setAmount, remove, modify, toggleCart }) {
  const { id, image, title, price } = item;
  const navigate = useNavigate();

  const handleClick = () => {
    toggleCart();
    navigate(`product/${id}`);
  };

  return (
    <div className={styles.container}>
      <img
        className={styles.img}
        src={image}
        alt={title}
        onClick={handleClick}
      />
      <div className={styles.details}>
        <div className={styles.top}>
          <h2 className={styles.h2}>
            <a className={styles.link} onClick={handleClick}>
              {title}
            </a>
          </h2>
          <button
            className={styles.remove}
            onClick={remove}
            aria-label="delete"
          >
            <DeleteOutlineIcon className={styles.delete} />
          </button>
        </div>
        <div className={styles.bottom}>
          <Price price={price} />
          <ProductAmountControl amount={amount} setAmount={setAmount} />
        </div>
      </div>
    </div>
  );
}

CartItem.propTypes = {};

export default CartItem;
