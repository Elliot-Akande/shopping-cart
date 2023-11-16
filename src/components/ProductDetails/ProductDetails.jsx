import { useOutletContext, useParams } from "react-router-dom";
import { useState } from "react";
import ProductAmountControl from "../ProductAmountControl/ProductAmountControl";

function ProductDetails() {
  const [amount, setAmount] = useState(1);
  const { products, cartManager } = useOutletContext();

  const id = parseInt(useParams().id, 10);
  const product = products ? products.find((item) => item.id === id) : null;

  const handleAddToCart = () => {
    if (!isNaN(amount) && amount > 0) cartManager.modify(id, amount);
  };

  return (
    <main>
      {product && (
        <>
          <img src={product.image} alt={product.title} />
          <div>
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            <strong>£{product.price}</strong>
            <ProductAmountControl amount={amount} setAmount={setAmount} />
            <button onClick={handleAddToCart}>Add to cart</button>
          </div>
        </>
      )}
    </main>
  );
}

export default ProductDetails;
