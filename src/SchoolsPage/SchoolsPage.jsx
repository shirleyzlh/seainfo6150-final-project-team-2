import React from 'react'
import PropTypes from 'prop-types'
import Schools from "../Schools/Schools";

const SchoolsPage = ({ degrees, schools }) => {
  return (
    <div>
      This is the Schools page 
      <Schools degrees={degrees} schools={schools} />
    </div>
  )
}

SchoolsPage.propTypes = {
  degrees: PropTypes.array.isRequired,
  schools: PropTypes.array.isRequired
}

export default SchoolsPage
