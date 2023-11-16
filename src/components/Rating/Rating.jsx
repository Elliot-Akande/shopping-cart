import React from "react";
import PropTypes from "prop-types";

function Rating({ rating }) {
  const { rate, count } = rating;

  return <div>{rate} stars</div>;
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
