import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Price from "../Price/Price";
import Rating from "../Rating/Rating";
import styles from "./ProductCard.module.css";

function ProductCard({ product }) {
  const { id, title, price, image, rating } = product;

  return (
    <Link to={`/product/${id}`} className={styles.link}>
      <img className={styles.img} src={image} alt={title} />
      <hr className={styles.hr}></hr>
      <div className={styles.container}>
        <h2 className={styles.title}>{title}</h2>
        <Rating rating={rating} />
        <Price price={price}></Price>
      </div>
    </Link>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    title: PropTypes.string,
    price: PropTypes.number,
    image: PropTypes.string,
    rating: PropTypes.object,
  }),
};

export default ProductCard;
