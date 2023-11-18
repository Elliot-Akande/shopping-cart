import { useOutletContext, useParams } from "react-router-dom";
import { useState } from "react";
import ProductAmountControl from "../ProductAmountControl/ProductAmountControl";
import styles from "./ProductDetails.module.css";
import Price from "../Price/Price";
import Rating from "../Rating/Rating";

function ProductDetails() {
  const [amount, setAmount] = useState(1);
  const { products, cartManager } = useOutletContext();

  const id = parseInt(useParams().id, 10);
  const product = products ? products.find((item) => item.id === id) : null;

  const handleAddToCart = () => {
    if (!isNaN(amount) && amount > 0) cartManager.modify(id, amount);
  };

  const handleIncrement = () => {
    setAmount((prev) => {
      if (isNaN(parseInt(prev, 10)) || prev < 1) return 1;
      return prev + 1;
    });
  };

  const handleDecrement = () => {
    setAmount((prev) => {
      if (isNaN(parseInt(prev, 10)) || prev <= 1) return 1;
      return prev - 1;
    });
  };

  return (
    <main className={styles.main}>
      {product && (
        <>
          <img className={styles.img} src={product.image} alt={product.title} />
          <div className={styles.div}>
            <div className={styles.section}>
              <h1 className={styles.title}>{product.title}</h1>
              <Rating rating={product.rating} />
              <p className={styles.description}>{product.description}</p>
              <Price price={product.price} />
            </div>
            <div className={styles.section}>
              <ProductAmountControl
                amount={amount}
                setAmount={setAmount}
                handleIncrement={handleIncrement}
                handleDecrement={handleDecrement}
              />
              <button className={styles.button} onClick={handleAddToCart}>
                ADD TO CART
              </button>
            </div>
          </div>
        </>
      )}
    </main>
  );
}

export default ProductDetails;
