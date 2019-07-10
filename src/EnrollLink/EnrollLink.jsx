import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const EnrollLink = ({ degreeSlug }) => {
  return <Link to={`/enroll/${degreeSlug}`}>Enroll</Link>;
};

EnrollLink.propTypes = {
  degreeSlug: PropTypes.string.isRequired
};

export default EnrollLink;
