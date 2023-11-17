import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Rating from "../Rating/Rating";
import styles from "./ProductCard.module.css";
import Price from "../Price/Price";

function ProductCard({ product }) {
  const { id, title, price, category, description, image, rating } = product;

  return (
    <Link to={`/products/${id}`} className={styles.link}>
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
    title: PropTypes.string,
    price: PropTypes.number,
    category: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    rating: PropTypes.object,
  }),
};

export default ProductCard;
