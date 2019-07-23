import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import styles from "./Degrees.module.css";

const Degrees = ({ degrees }) => {
  return (
    <div>
      {degrees.map((degree, index) => {
        return (
          <div key={`${degree.slug}`} className={styles.degreeItem}>
            <header>
              <h1>{degree.title}</h1>
              <p>{degree.short_summary}</p>
              <Link to={'/degree/' + degree.slug}>See details</Link>
            </header>
            <img src={degree.image} alt={degree.title} />
          </div>
        );
      })}
    </div>
  );
};

Degrees.propTypes = {
  degrees: PropTypes.array.isRequired
};

export default Degrees;
