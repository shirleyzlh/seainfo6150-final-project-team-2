import React, { Component } from "react";
import PropTypes from "prop-types";

import Degrees from "../Degrees/Degrees";
import DegreesSorterFilterer from "../DegreesSorterFilterer/DegreesSorterFilterer";

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

        <DegreesSorterFilterer
          onFilter={this.onFilter}
          onSort={this.onSort}
          schools={this.props.schools}
        />
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
