import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const DegreePage = ({ degree }) => {
  return (
    <div>
      <Link to={`/enroll/${degree.slug}`}>Enroll</Link>
    </div>
  );
};

DegreePage.propTypes = {
  degree: PropTypes.object.isRequired
};

export default DegreePage;
