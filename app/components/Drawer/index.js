/**
*
* Drawer
*
*/

import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.css';
import classNames from 'classnames';

function Drawer({ items, selectItem, itemLabelAttr, itemKeyAttr, isDrawerOpen }) {
  const itemNodes = items.map((item) => (
    <div
      className={styles.item}
      onClick={() => selectItem(item)}
      key={item[itemKeyAttr]}
    >
      {item[itemLabelAttr]}
    </div>
  ));
  return (
    <div className={classNames(styles.drawer, { [styles.drawerOpen]: isDrawerOpen })}>
      {itemNodes}
    </div>
  );
}

Drawer.propTypes = {
  items: PropTypes.array.isRequired,
  selectItem: PropTypes.func.isRequired,
  itemLabelAttr: PropTypes.string.isRequired,
  itemKeyAttr: PropTypes.string.isRequired,
  isDrawerOpen: PropTypes.bool.isRequired,
};

export default Drawer;
