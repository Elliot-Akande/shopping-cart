import { useOutletContext, useParams } from "react-router-dom";
import { useState } from "react";

function ProductDetails() {
  const [amount, setAmount] = useState(1);
  const { products, cartManager } = useOutletContext();

  const id = parseInt(useParams().id, 10);
  const product = products ? products.find((item) => item.id === id) : null;

  const handleAmountChange = (e) => {
    setAmount(parseInt(e.target.value, 10));
  };

  const incrementAmount = () => {
    setAmount((prev) => prev + 1);
  };

  const decrementAmount = () => {
    setAmount((prev) => prev - 1);
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
            <div>
              <button onClick={decrementAmount}>-</button>
              <input
                type="number"
                name="amount"
                value={amount}
                onChange={handleAmountChange}
              />
              <button onClick={incrementAmount}>+</button>
            </div>
            <button>Add to cart</button>
          </div>
        </>
      )}
    </main>
  );
}

export default ProductDetails;
