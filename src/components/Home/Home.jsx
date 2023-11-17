import { Link } from "react-router-dom";
import styles from "./Home.module.css";

function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.logo}>AKANDE</div>
      <h1 className={styles.h1}>THE HUGE BLACK FRIDAY SALE</h1>
      <Link className={styles.link} to="/products">
        SHOP NOW
      </Link>
    </main>
  );
}

export default Home;
