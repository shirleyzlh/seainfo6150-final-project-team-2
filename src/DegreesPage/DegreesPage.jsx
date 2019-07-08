import React, { Component } from "react";
import PropTypes from "prop-types";

import Degrees from "../Degrees/Degrees";

class DegreesPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      updatedDegrees: null
    };
  }

  onFilter = e => {
    let filterType;
    if (e.target.id) {
      filterType = e.target.id;
    }
    if (filterType) {
      let filtered;
      if (e.target.value === "none") {
        this.setState({ updatedDegrees: null });
      } else {
        if (filterType === "school") {
          filtered = this.onFilterSchool(e.target.value);
        } else if (filterType === "level") {
          filtered = this.onFilterLevel(e.target.value);
        }

        this.setState({
          updatedDegrees: this.onSortAZ(filtered)
        });
      }
    }
  };

  onFilterLevel = levels => {
    return this.props.degrees.filter(degree => levels.includes(degree.level));
  };

  onFilterSchool = school => {
    return this.props.degrees.filter(degree => degree.schools.includes(school));
  };

  onSort = e => {
    let sortType;
    if (e.target.value) {
      sortType = e.target.value;
    }

    if (sortType !== "none") {
      let toSort = this.props.degrees.slice();      
      
      let sorted;
      if (sortType === "AZ") {
        sorted = this.onSortAZ(toSort);
      } else if (sortType === "ZA") {
        sorted = this.onSortZA(toSort);
      }

      this.setState({
        updatedDegrees: sorted
      });
    } else {
      this.setState({
        updatedDegrees: null
      });
    }
  };

  onSortAZ = toSort => {
    return toSort.sort((a, b) => {
      if (a.title < b.title) {
        return -1;
      } else if (a.title > b.title) {
        return 1;
      }
      return 0;
    });
  };

  onSortZA = toSort => {
    return this.onSortAZ(toSort).reverse();
  };

  render() {
    const displayDegrees = this.state.updatedDegrees || this.props.degrees;

    return (
      <div>
        This is the Degrees page
        <section>
          <header>Sort by:</header>
          <select onChange={this.onSort}>
            <option value="none">None</option>
            <option value="AZ">A - Z</option>
            <option value="ZA">Z - A</option>
          </select>
        </section>
        <section>
          <header>Filter by:</header>
          <div>
            <label htmlFor="level">By level</label>
            <select name="level" id="level" onChange={this.onFilter}>
              <option value="none">None</option>
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
              <option value="mastery">Mastery</option>
            </select>
          </div>
          <div>
            <label htmlFor="school">By school</label>
            <select name="school" id="school" onChange={this.onFilter}>
              <option value="none">None</option>

              {this.props.schools.map((school, index) => (
                <option key={school.slug} value={school.slug}>{school.name}</option>
              ))}
            </select>
          </div>
        </section>
        <section>
          <header>Degrees</header>
          <Degrees degrees={displayDegrees} />
        </section>
      </div>
    );
  }
}

DegreesPage.propTypes = {
  degrees: PropTypes.array.isRequired,
  schools: PropTypes.array.isRequired
};

export default DegreesPage;
