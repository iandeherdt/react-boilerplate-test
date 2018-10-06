/**
*
* AppBar
*
*/

import React from 'react';
import FontAwesome from 'react-fontawesome';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

import styles from './styles.css';

function AppBar({ toggleDrawer, email }) {
  return (
    <div className={styles.appBar}>
      <div className={styles.iconButton} onClick={toggleDrawer}>
        <FontAwesome className={styles.icon} name="bars" />
      </div>
      <div className={styles.heading}>
        Coder Daily
      </div>
      <div className={styles.linkContainer}>
        { email || <Link to="/login">Log in</Link> }
      </div>
    </div>
  );
}

AppBar.propTypes = {
  toggleDrawer: PropTypes.func.isRequired,
  email: PropTypes.string,
};

export default AppBar;
