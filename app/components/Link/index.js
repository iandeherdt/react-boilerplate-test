/**
*
* Link
*
*/

import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.css';

function Link({ link }) {
  return (
    <div className={styles.link}>
      <div className={styles.votingContainer}>
        <div className={styles.votingCount}>
          {link.voteCount}
        </div>
      </div>
      <div className={styles.detailsContainer}>
        <div>
          <a href={link.url} className={styles.linkAnchor} >{link.url}</a>
        </div>
        <div className={styles.description}>
          {link.description}
        </div>
      </div>
    </div>
  );
}

Link.propTypes = {
  link: PropTypes.shape({
    id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }),
};

export default Link;
