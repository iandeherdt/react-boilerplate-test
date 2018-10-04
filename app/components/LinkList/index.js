/**
*
* LinkList
*
*/

import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.css';
import Link from '../Link';

function LinkList({ links, topicName }) {
  const LinkListNodes = links.map(link => (
    <Link key={link.id} link={link} />
  ));
  return (
    <div className={styles.linkList}>
      <h1>{topicName}</h1>
      {LinkListNodes}
    </div>
  );
}

LinkList.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  })),
  topicName: PropTypes.string.isRequired,
};

export default LinkList;
