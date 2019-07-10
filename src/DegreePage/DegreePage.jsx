import React from "react";
import PropTypes from "prop-types";

const DegreePage = ({ degree, schools }) => {
  // thisDegreesSchools is an array of all the
  // schools offering the degree currently being viewed
  const thisDegreesSchools = schools.filter(school =>
    degree.schools.includes(school.slug)
  );

  return (
    <div>
      Degree display information
      <img src={degree.image} alt={degree.title} />
      {/* You should link from here to the enroll page */}
    </div>
  );
};

DegreePage.propTypes = {
  degree: PropTypes.object.isRequired
};

export default DegreePage;
