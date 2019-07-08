import React from "react";
import PropTypes from "prop-types";

import Degrees from "../Degrees/Degrees";

const Schools = ({ degrees, schools }) => {
  return (
    <div>
      {schools.map((school, index) => {
        const thisSchoolsDegrees = degrees.filter(degree =>
          degree.schools.includes(school.slug)
        );
        return (
          <div key={`${school.slug}`}>
            School: {school.name}
            <br />
            Degrees:
            <Degrees degrees={thisSchoolsDegrees} />
            <hr />
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
