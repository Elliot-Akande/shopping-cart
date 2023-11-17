import PropTypes from "prop-types";
import styles from "./Price.module.css";

function Price({ price }) {
  const split = price ? price.toString().split(".") : ["xx", "xx"];
  const pounds = split[0];

  const getPence = () => {
    if (split.length <= 1) return "00";
    if (split[1] < 10) return split[1] * 10;
    return split[1];
  };

  return (
    <strong className={styles.strong}>
      £ <span className={styles.pounds}>{pounds}</span> {getPence()}
    </strong>
  );
}

Price.propTypes = {
  price: PropTypes.number,
};

export default Price;
