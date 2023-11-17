import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";

function NavBar() {
  return (
    <nav className={styles.nav}>
      <Link className={styles.logo} to="/">
        AKANDE
      </Link>
      <ul className={styles.links}>
        <li>
          <Link className={styles.link} to="/">
            HOME
          </Link>
        </li>
        <li>
          <Link className={styles.link} to="/products">
            PRODUCTS
          </Link>
        </li>
        <li>
          <Link className={styles.link}>ABOUT</Link>
        </li>
      </ul>
      <button className={styles.basket}>BASKET</button>
    </nav>
  );
}

export default NavBar;
