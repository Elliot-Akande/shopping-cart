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
