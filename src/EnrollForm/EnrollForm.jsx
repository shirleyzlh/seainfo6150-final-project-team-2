import React from "react";
import PropTypes from "prop-types";

const EnrollForm = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      This is the enrollment form 
      <input type="text" name="foo" />
      <input type="text" name="bar" />
      <input type="text" name="baz" />
      <input type="submit" value="Submit enrollment" />
    </form>
  );
};

EnrollForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
}
export default EnrollForm;
