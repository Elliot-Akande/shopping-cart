import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Cart from "./components/Cart/Cart";

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

const cartManager = (cart, setCart) => {
  const modify = (id, _amount) => {
    const index = cart.findIndex((item) => item.id === id);
    if (index >= 0) {
      const updatedCart = [...cart];
      updatedCart[index].amount += _amount;
      if (updatedCart[index].amount <= 0) updatedCart.splice(index, 1);
      setCart(updatedCart);
    } else {
      setCart([...cart, { id, amount: _amount }]);
    }
  };

  const remove = (id) => {
    const index = cart.findIndex((item) => item.id === id);
    if (index >= 0) {
      const updatedCart = [...cart];
      updatedCart.splice(index, 1);
      setCart(updatedCart);
    }
  };

  return {
    modify,
    remove,
  };
};

function App() {
  const { products, error } = useProductData();
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen((prev) => !prev);
  };

  return (
    <>
      <NavBar toggleCart={toggleCart} />
      {isCartOpen && (
        <Cart
          toggleCart={toggleCart}
          cart={cart}
          setCart={setCart}
          removeItem={cartManager(cart, setCart).remove}
          products={products}
        />
      )}
      {error ? (
        <p>
          There was a problem loading page data. If this problem persists please
          contact the site owner
        </p>
      ) : (
        <Outlet
          context={{
            products,
            isCartOpen,
            toggleCart,
            cart,
            cartManager: cartManager(cart, setCart),
          }}
        />
      )}
    </>
  );
}

export default App;
