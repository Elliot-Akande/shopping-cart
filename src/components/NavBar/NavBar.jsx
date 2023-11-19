import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";

function NavBar({ toggleCart }) {
  return (
    <>
      <nav className={styles.nav}>
        <Link className={styles.logo} to="/">
          AKANDE
        </Link>
        <ul className={styles.links}>
          <li>
            <Link className={styles.link} to="/products/clothing">
              CLOTHING
            </Link>
          </li>
          <li>
            <Link className={styles.link} to="/products/accessories">
              ACCESSORIES
            </Link>
          </li>
          <li>
            <Link className={styles.link} to="/products/technology">
              TECHNOLOGY
            </Link>
          </li>
        </ul>
        <button
          className={styles.basket}
          onClick={toggleCart}
          aria-label="basket"
        >
          <ShoppingBagOutlinedIcon sx={{ fontSize: 24, color: "#fff" }} />
        </button>
      </nav>
    </>
  );
}

NavBar.propTypes = {
  toggleCart: PropTypes.func,
};

export default NavBar;
