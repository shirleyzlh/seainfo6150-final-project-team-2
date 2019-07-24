import React from "react";
import PropTypes from "prop-types";

import styles from "./EnrollForm.module.css";

const EnrollForm = ({ onSubmit, degrees }) => {
  return (
    <form onSubmit={onSubmit}>
      <h1 className={styles.title}>Student Enrollment Form</h1>
      <div>
        <fieldset>
          <div>
            <label htmlFor="fullname">Full Name</label>
          </div>
          <div>
            <input id="fullname" name="Full Name" type="text" placeholder="Full Name" required />
          </div>
        </fieldset>
        <fieldset>
          <div>
            <label htmlFor="email">Email</label>
          </div>
          <div>
            <input id="email" name="Email" type="email" placeholder="foo@bar.com" required />
          </div>
        </fieldset>
        <fieldset>
          <div>
            <label htmlFor="address">Address</label>
          </div>
          <div>
            <input id="streetAddress" name="Street Address" type="text" placeholder="Street Address" required />
          </div>
        </fieldset>
        <fieldset>
          <div className={styles.cityAndState}>
            <select name="City" required className={styles.city}>
              <option selected="selected" value="None">City</option>
              <option value="seattle">Seattle</option>
              <option value="bellevue">Bellevue</option>
              <option value="redmond">Redmond</option>
              <option value="bothell">Bothell</option>
            </select>
            <select name="State" required className={styles.state}>
              <option selected="selected" value="None">State</option>
              <option value="wa">Washington</option>
              <option value="ca">California</option>
              <option value="or">Oregon</option>
            </select>
          </div>
          <div>
            <label htmlFor="zip">Zip Code</label>
          </div>
          <div>
            <input id="zip" name="Zip Code" type="text" placeholder="XXXXX" pattern="[0-9]{5}" required />
          </div>
        </fieldset>
        <fieldset>
          <div>
            <label htmlFor="phone">Phone Number</label>
          </div>
          <div>
            <input type="tel" id="phone" name="Phone Number" pattern="[0-9]{3}[0-9]{3}[0-9]{4}" required placeholder="XXX-XXX-XXXX" />
          </div>
        </fieldset>
        <fieldset>
          <div>
            <label htmlFor="bday">Date of Birth</label>
          </div>
          <div>
            <input id="bday" name="Birth Date" type="date" required />
          </div>
        </fieldset>
        <fieldset>
          <div>
            <label htmlFor="gender">Gender</label>
          </div>
          <div>
            <select name="Gender" required>
              <option selected="selected" value="None">Select gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
              <option value="pnts">Prefer Not to Say</option>
            </select>
          </div>
        </fieldset>
        <fieldset>
          <div>
            <label htmlFor="pronouns">Preferred Pronouns</label>
          </div>
          <div>
            <select name="Preferred Pronouns" required>
              <option selected="selected" value="None">Select pronouns</option>
              <option value="he">He/Him</option>
              <option value="she">she/her</option>
              <option value="they">they/them</option>
              <option value="other">Other</option>
              <option value="pnts">Prefer Not to Say</option>
            </select>
          </div>
        </fieldset>
        <fieldset>
          <div>
            <label htmlFor="interestedDegrees">Degrees of Interest</label>
          </div>
          <div>
            <select multiple name="Degrees of Interest" className={styles.degrees}>
              <option value="AI Product Manager">AI Product Manager</option>
              <option value="Sensor Fusion Engineer">Sensor Fusion Engineer</option>
              <option value="dv">Data Visualization</option>
              <option value="cd">Cloud Developer</option>
              <option value="cde">Cloud DevOps Engineer</option>
              <option value="iml">Introduction to Machine Learning</option>
              <option value="c">C++</option>
              <option value="dsa">Data Structures and Algorithms</option>
              <option value="pds">Programming for Data Science</option>
              <option value="de">Data Engineer</option>
              <option value="ma">Marketing Analytics</option>
              <option value="ip">Introduction to Programming</option>
              <option value="fewd">Front End Web Developer</option>
              <option value="da">Data Analyst</option>
              <option value="id">IOS Developer</option>
              <option value="fswd">Full Stack Web Developer</option>
              <option value="pab">Predictive Analytics for Business</option>
              <option value="bae">Business Analyst for Enterprise</option>
              <option value="ba">Business Analyst</option>
              <option value="sdce">Self Driving Car Engineer</option>
              <option value="vd">VR Developer</option>
              <option value="dm">Digital Marketing</option>
              <option value="r">React</option>
              <option value="mws">Mobile Web Specialist</option>
            </select>
          </div>
        </fieldset>
        <fieldset>
          <div>
            <input type="submit" name="Submit Status" value="Submit enrollment" />
          </div>
        </fieldset>
      </div>
    </form >
  );
}

EnrollForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  degrees: PropTypes.array.isRequired
}
export default EnrollForm;
