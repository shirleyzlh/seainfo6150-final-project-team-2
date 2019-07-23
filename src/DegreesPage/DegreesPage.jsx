import React, { Component } from "react";
import PropTypes from "prop-types";

import Degrees from "../Degrees/Degrees";
import DegreesSorterFilterer from "../DegreesSorterFilterer/DegreesSorterFilterer";

import styles from "./DegreesPage.module.css"

class DegreesPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      updatedDegrees: null
    };
  }

  onFilter = ({ key, id }) => {
    let filterType = id;

    let filtered = this.onFilterLevel(key);
    if (key === "none") {
      this.setState({ updatedDegrees: null });
    } else {
      if (filterType === "school") {
        filtered = this.onFilterSchool(key);
      } else if (filterType === "level") {
        filtered = this.onFilterLevel(key);
      }

      this.setState({
        updatedDegrees: this.onSortAZ(filtered)
      });
    }
  };

  onFilterByLevel = ({ key }) => {
    let filtered = this.onFilterLevel(key);
    if (key === "none") {
      this.setState({ updatedDegrees: null });
    } else {
      this.setState({
        updatedDegrees: this.onSortAZ(filtered)
      });
    }
  }

  onFilterBySchool = ({ key }) => {
    let filtered = this.onFilterSchool(key);
    if (key === "none") {
      this.setState({ updatedDegrees: null });
    } else {
      this.setState({
        updatedDegrees: this.onSortAZ(filtered)
      });
    }
  }

  onFilterLevel = levels => {
    return this.props.degrees.filter(degree => levels.includes(degree.level));
  };

  onFilterSchool = school => {
    return this.props.degrees.filter(degree => degree.schools.includes(school));
  };

  onSort = ({ key }) => {
    let sortType = key;

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
      <div className={styles.allPage}>
        <div className={styles.title}>Programs and Degrees</div>
        <DegreesSorterFilterer
          onFilterByLevel={this.onFilterByLevel}
          onFilterBySchool={this.onFilterBySchool}
          onSort={this.onSort}
          schools={this.props.schools}
        />
        <section>
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
