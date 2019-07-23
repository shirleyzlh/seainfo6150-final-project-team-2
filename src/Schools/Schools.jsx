import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

import Degrees from "../Degrees/Degrees";
import 'antd/dist/antd.css';
import { Menu, Dropdown, Icon } from 'antd';
import MenuItem from "antd/lib/menu/MenuItem";

import styles from "./Schools.module.css";

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
        const degreesMenu = (
          <Menu mode="vertical">
            {thisSchoolsDegrees.map((degree, index) => {
              return <MenuItem><NavLink to={'/degree/' + degree.slug}>{degree.title}</NavLink></MenuItem>
            })}
          </Menu>
        );

        return (
          <div key={`${school.slug}`} className={styles.schoolItem}>
            <header>
              <h1>School of {school.name}</h1>
              <p>{school.short_summary}</p>
              <Dropdown overlay={degreesMenu}>
                <a className="ant-dropdown-link" href="#">
                  Degrees <Icon type="down" />
                </a>
              </Dropdown>
            </header>
            <img src={school.image} alt={school.title} />
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
