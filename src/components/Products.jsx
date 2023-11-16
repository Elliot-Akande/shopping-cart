import { useOutletContext } from "react-router-dom";
import ProductCard from "./ProductCard";

function Products() {
  const [products] = useOutletContext();

  return (
    <main>
      {products &&
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </main>
  );
}

export default Products;
