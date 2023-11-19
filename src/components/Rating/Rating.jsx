import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import styles from "./Rating.module.css";

function Rating({ rating }) {
  const { rate, count } = rating;
  const [stars, setStars] = useState([
    <StarBorderIcon key={0} sx={{ color: "gold" }} />,
    <StarBorderIcon key={1} sx={{ color: "gold" }} />,
    <StarBorderIcon key={2} sx={{ color: "gold" }} />,
    <StarBorderIcon key={3} sx={{ color: "gold" }} />,
    <StarBorderIcon key={4} sx={{ color: "gold" }} />,
  ]);

  useEffect(() => {
    if (rate) {
      const updatedStars = stars.map((star, index) => {
        const starRate = rate - index;

        if (starRate > 0.75)
          return <StarIcon key={index} sx={{ color: "gold" }} />;
        if (starRate > 0.25 && starRate <= 0.75)
          return <StarHalfIcon key={index} sx={{ color: "gold" }} />;
        return <StarBorderIcon key={index} sx={{ color: "gold" }} />;
      });

      setStars(updatedStars);
    }
  }, [rate]);

  return (
    <div className={styles.container}>
      <div className={styles.stars}>{stars}</div>
      <p className={styles.count}>{count}</p>
    </div>
  );
}

const isValidRating = (props, propName, componentName) => {
  if (props[propName] < 0 || props[propName] > 5) {
    return new Error(
      `Invalid prop ${propName} passed to ${componentName}. Expected a valid rating from 0 to 5 (inclusive).`
    );
  }
};

Rating.propTypes = {
  rating: PropTypes.shape({
    rate: isValidRating,
    count: PropTypes.number,
  }),
};

export default Rating;
