import React from "react";
import PropTypes from "prop-types";

const DegreesSorterFilterer = ({ onSort, onFilter, schools }) => {
  return (
    <div>
      Degrees Sorter
      <section>
        <header>Sort by:</header>
        <select onChange={onSort}>
          <option value="none">None</option>
          <option value="AZ">A - Z</option>
          <option value="ZA">Z - A</option>
        </select>
      </section>
      <section>
        <header>Filter by:</header>
        <div>
          <label htmlFor="level">By level</label>
          <select name="level" id="level" onChange={onFilter}>
            <option value="none">None</option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
            <option value="mastery">Mastery</option>
          </select>
        </div>
        <div>
          <label htmlFor="school">By school</label>
          <select name="school" id="school" onChange={onFilter}>
            <option value="none">None</option>

            {schools.map((school, index) => (
              <option key={school.slug} value={school.slug}>
                School of {school.name}
              </option>
            ))}
          </select>
        </div>
      </section>
    </div>
  );
};

DegreesSorterFilterer.propTypes = {
  onFilter: PropTypes.func.isRequired,
  onSort: PropTypes.func.isRequired,
  schools: PropTypes.array.isRequired
};

export default DegreesSorterFilterer;
