import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Rating from "./Rating";

function ProductCard({ product }) {
  const { id, title, price, category, description, image, rating } = product;

  return (
    <Link to={`/products/${id}`}>
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <Rating rating={rating} />
      <strong>£{price}</strong>
    </Link>
  );
}

export default ProductCard;
