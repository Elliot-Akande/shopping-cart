import { useOutletContext, useParams } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";
import styles from "./Products.module.css";

function Products() {
  const { category } = useParams();
  const { products } = useOutletContext();

  const getTitle = () => {
    if (!category) return "Loading...";
    return category.toUpperCase();
  };

  const getCategory = () => {
    switch (category) {
      case "accessories":
        return "jewelery";
      case "technology":
        return "electronics";
      default:
        return category;
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
