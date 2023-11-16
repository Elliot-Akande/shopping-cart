import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import "./App.css";

const useProductData = () => {
  const [products, setProducts] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products", {
      mode: "cors",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error: status code ${response.status}`);
        }
        return response.json();
      })
      .then((response) => setProducts(response))
      .catch((err) => setError(err));
  }, []);

  return { products, error };
};

function App() {
  const { products, error } = useProductData();
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <>
      <NavBar />
      {error ? (
        <p>
          There was a problem loading page data. If this problem persists please
          contact the site owner
        </p>
      ) : (
        <Outlet
          context={[products, cart, setCart, isCartOpen, setIsCartOpen]}
        />
      )}
    </>
  );
}

export default App;
