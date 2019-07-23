import React from "react";
import PropTypes from "prop-types";

import 'antd/dist/antd.css';
import { Menu, Dropdown, Icon } from 'antd';

import styles from "./DegreesSorterFilterer.module.css";

const DegreesSorterFilterer = ({ onSort, onFilterByLevel, onFilterBySchool, schools }) => {
  const sortMenu = (
    <Menu onClick={onSort}>
      <Menu.Item key="none">None</Menu.Item>
      <Menu.Item key="AZ">A - Z</Menu.Item>
      <Menu.Item key="ZA">Z - A</Menu.Item>
    </Menu>
  );
  const filterByLevelMenu = (
    <Menu onClick={onFilterByLevel}>
      <Menu.Item key="none">None</Menu.Item>
      <Menu.Item key="beginner" id="level">Beginner</Menu.Item>
      <Menu.Item key="intermediate">Intermediate</Menu.Item>
      <Menu.Item key="advanced">Advanced</Menu.Item>
      <Menu.Item key="mastery">Mastery</Menu.Item>
    </Menu>
  );

  const filterBySchoolMenu = (
    <Menu onClick={onFilterBySchool}>
      <Menu.Item key="none">None</Menu.Item>
      {schools.map((school, index) => (
        <Menu.Item key={school.slug} value={school.slug}>
          School of {school.name}
        </Menu.Item>
      ))}
    </Menu>
  );

  return (
    <div className={styles.sorterFilterer}>
      <section>
        <Dropdown overlay={sortMenu}>
          <a className="ant-dropdown-link" href="#">
            Sort by <Icon type="down" />
          </a>
        </Dropdown>
      </section>
      <section>
        <Dropdown overlay={filterByLevelMenu}>
          <a className="ant-dropdown-link" href="#">
            Filter by level <Icon type="down" />
          </a>
        </Dropdown>
        <Dropdown overlay={filterBySchoolMenu}>
          <a className="ant-dropdown-link" href="#">
            Filter by school <Icon type="down" />
          </a>
        </Dropdown>
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
