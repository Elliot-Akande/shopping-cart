import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Home(props) {
  return (
    <main>
      <div>Store Name</div>
      <h1>THE HUGE BLACK FRIDAY SALE</h1>
      <Link to="/products">SHOP NOW</Link>
    </main>
  );
}

Home.propTypes = {};

export default Home;
