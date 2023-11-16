import { useOutletContext, useParams } from "react-router-dom";
import { useState } from "react";

function ProductDetails() {
  const [amount, setAmount] = useState(1);
  const { products, cartManager } = useOutletContext();

  const id = parseInt(useParams().id, 10);
  const product = products ? products.find((item) => item.id === id) : null;

  const incrementAmount = () => {
    setAmount((prev) => {
      if (isNaN(parseInt(prev, 10)) || prev < 1) return 1;
      return prev + 1;
    });
  };

  const decrementAmount = () => {
    setAmount((prev) => {
      if (isNaN(parseInt(prev, 10)) || prev <= 1) return 1;
      return prev - 1;
    });
  };

  const handleAmountChange = (e) => {
    const { value } = e.target;
    if (!isNaN(parseInt(value, 10))) {
      setAmount(parseInt(value, 10));
    } else {
      setAmount(value);
    }
  };

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
            <div>
              <button onClick={decrementAmount}>-</button>
              <input
                type="number"
                name="amount"
                value={amount}
                onChange={handleAmountChange}
                min={1}
              />
              <button onClick={incrementAmount}>+</button>
            </div>
            <button onClick={handleAddToCart}>Add to cart</button>
          </div>
        </>
      )}
    </main>
  );
}

export default ProductDetails;
