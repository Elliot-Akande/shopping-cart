import { useOutletContext, useParams } from "react-router-dom";

function ProductDetails() {
  const id = parseInt(useParams().id, 10);
  const { products } = useOutletContext();
  const product = products ? products.find((item) => item.id === id) : null;

  return (
    <main>
      {product && (
        <>
          <img src={product.image} alt={product.title} />
          <div>
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            <strong>£{product.price}</strong>
            <button>Add to cart</button>
          </div>
        </>
      )}
    </main>
  );
}

export default ProductDetails;
