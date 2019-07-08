import React from "react";
import PropTypes from "prop-types";

const Calendar = ({ dates }) => {
  return (
    <div>
      {dates.map((date, index) => {
        return (
          <div key={`${date.date}-${index}`}>
            Date: {date.date}, Description: {date.description}
          </div>
        );
      })}
    </div>
  );
};

Calendar.propTypes = {
  dates: PropTypes.array.isRequired
};

export default Calendar;
