import React from 'react'
import PropTypes from 'prop-types'
import Schools from "../Schools/Schools";

import styles from "./SchoolsPage.module.css";

const SchoolsPage = ({ degrees, schools }) => {
  return (
    <div className={styles.allPage}>
      <div className={styles.title}>Schools and Colleges</div>
      <hr />
      <Schools degrees={degrees} schools={schools} />
    </div>
  )
}

SchoolsPage.propTypes = {
  degrees: PropTypes.array.isRequired,
  schools: PropTypes.array.isRequired
}

export default SchoolsPage
