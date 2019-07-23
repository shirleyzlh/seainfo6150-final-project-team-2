import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import 'antd/dist/antd.css';
import { Card, Button } from 'antd';

import styles from "./DegreePage.module.css";

const DegreePage = ({ degree, schools }) => {
  // thisDegreesSchools is an array of all the
  // schools offering the degree currently being viewed
  const thisDegreesSchools = schools.filter(school =>
    degree.schools.includes(school.slug)
  );

  return (
    <div>
      <header className={styles.header}>
        <img src={degree.image} alt={degree.title} className={styles.image} />

        <Card hoverable title={degree.title} bordered={true} className={styles.card}>
          <ul>{thisDegreesSchools.map((school, index) => (<li key={index}>School of {school.name}</li>))}</ul>
        </Card>
      </header>


      <div className={styles.details}>
        <section>
          <h2>About</h2>
          <h4>{degree.short_summary}</h4>
        </section>
        <section>
          <h2>Learning Level</h2>
          <h4>{degree.level}</h4>
        </section>
        <section>
          <a href={degree.syllabus_pdf_urls}>Program Syllabus</a>
        </section>
        <section className={styles.enrollButton}>
          <Button type="primary">
            <Link to={'/enroll/' + degree.slug}>Enroll in this degree!</Link>
          </Button>
        </section>
      </div>
    </div >
  );
};

DegreePage.propTypes = {
  degree: PropTypes.object.isRequired
};

export default DegreePage;
