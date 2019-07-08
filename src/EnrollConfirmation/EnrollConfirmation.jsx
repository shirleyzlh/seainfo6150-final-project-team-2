import React from "react";
import PropTypes from "prop-types";

const EnrollConfirmation = ({ form }) => {
  const displayElements = [];
  for (let i = 0; i < form.elements.length; i++) {
    const element = form.elements[i];

    displayElements.push(
      <div key={`enroll-${i}`}>
        {element.name}: {element.value}
      </div>
    );
  }

  return <div>{displayElements}</div>;
};

EnrollConfirmation.propTypes = {
  form: PropTypes.object.isRequired
};

export default EnrollConfirmation;
