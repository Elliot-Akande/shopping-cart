import { useOutletContext, useParams, Link } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";
import styles from "./Products.module.css";

function Products() {
  const { category } = useParams();
  const { products } = useOutletContext();

  const getTitle = () => {
    return category.toUpperCase();
  };

  const getCategory = () => {
    switch (category) {
      case "accessories":
        return "jewelery";
      case "technology":
        return "electronics";
      case "clothing":
        return "clothing";
      default:
        return null;
    }
  };

  const filterProducts = () => {
    if (!products || !category) return [];
    return products.filter((product) =>
      product.category.includes(getCategory())
    );
  };

  const filtered = filterProducts();
  const title = getTitle();

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>{title}</h1>
        {filtered.length === 0 && (
          <div>
            <p>This category does not exist.</p>
            <Link to="/">Take me home</Link>
          </div>
        )}
        <div className={styles.products}>
          {products &&
            filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
      </div>
    </main>
  );
}

export default Products;
