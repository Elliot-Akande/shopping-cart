import { useOutletContext } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";
import styles from "./Products.module.css";

function Products() {
  const { products } = useOutletContext();

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </main>
  );
}

export default Products;
