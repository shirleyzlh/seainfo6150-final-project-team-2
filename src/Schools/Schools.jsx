import React from "react";
import PropTypes from "prop-types";

import Degrees from "../Degrees/Degrees";

const Schools = ({ degrees, schools }) => {
  return (
    <div>
      {schools.map((school, index) => {
        // thisSchoolsDegrees is an array of all the
        // degrees offered by the school currently being
        // iterated over
        const thisSchoolsDegrees = degrees.filter(degree =>
          degree.schools.includes(school.slug)
        );

        return (
          <div key={`${school.slug}`}>
            Schools display attributes
          </div>
        );
      })}
    </div>
  );
};

Schools.propTypes = {
  degrees: PropTypes.array.isRequired,
  schools: PropTypes.array.isRequired
};

export default Schools;
