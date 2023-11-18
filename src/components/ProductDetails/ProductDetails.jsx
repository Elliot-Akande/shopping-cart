import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useEffect, useState } from "react";
import { useNavigate, useOutletContext, useParams } from "react-router-dom";
import Price from "../Price/Price";
import ProductAmountControl from "../ProductAmountControl/ProductAmountControl";
import Rating from "../Rating/Rating";
import styles from "./ProductDetails.module.css";

function ProductDetails() {
  const [amount, setAmount] = useState(1);
  const { products, cartManager, toggleCart } = useOutletContext();
  const id = parseInt(useParams().id, 10);
  const product = products ? products.find((item) => item.id === id) : null;
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleAddToCart = () => {
    cartManager.modify(id, amount);
    toggleCart();
  };

  const handleIncrement = () => {
    setAmount((prev) => (prev > 0 ? prev + 1 : 1));
  };

  const handleDecrement = () => {
    setAmount((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const getCategory = () => {
    switch (product.category) {
      case "jewelery":
        return "accessories";
      case "electronics":
        return "technology";
      default:
        return "clothing";
    }
  };

  const handleBackButton = () => {
    !product ? navigate("/") : navigate(`/products/${getCategory()}`);
  };

  return (
    <main className={styles.main}>
      <button className={styles.back} onClick={handleBackButton}>
        <ArrowBackIosIcon className={styles.arrow} aria-hidden="true" />
        {product ? getCategory().toUpperCase() : "HOME"}
      </button>
      {product && (
        <div className={styles.container}>
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
        </div>
      )}
    </main>
  );
}

export default ProductDetails;
