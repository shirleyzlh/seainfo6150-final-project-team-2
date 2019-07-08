import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Degrees = ({ degrees }) => {
  return (
    <div>
      {degrees.map((degree, index) => {
        return (
          <div key={`${degree.slug}`}>
            <img src={degree.image} alt={degree.title} />
            <Link to={`/degree/${degree.slug}`}>Degree: {degree.title}</Link>
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
