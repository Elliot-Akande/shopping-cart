import { useState, useEffect } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import { Outlet } from "react-router-dom";

const useProductData = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products", {
      mode: "cors",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error: status code ${response.status}`);
        }
        response.json();
      })
      .then((response) => setData(response))
      .catch((err) => setError(err));
  }, []);

  return { data, error };
};

function App() {
  const { data, error } = useProductData();
  const [cart, setCart] = useState([]);

  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}

export default App;
