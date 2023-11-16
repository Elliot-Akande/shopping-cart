import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";

function NavBar() {
  return (
    <nav className={styles.nav}>
      <Link className={styles.logo} to="/">
        Store Name
      </Link>
      <ul className={styles.links}>
        <li>
          <Link className={styles.link} to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className={styles.link} to="/products">
            Products
          </Link>
        </li>
        <li>
          <Link className={styles.link}>About</Link>
        </li>
      </ul>
      <button className={styles.basket}>Basket</button>
    </nav>
  );
}

export default NavBar;
