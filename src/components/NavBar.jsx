import { Link } from "react-router-dom";

function NavBar(props) {
  return (
    <nav>
      <Link>Store Name</Link>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link>About</Link>
      </div>
      <button>Basket</button>
    </nav>
  );
}

export default NavBar;
