import React from 'react';
import styles from './stylesheets/PageWrapper.scss';

export default props => {
  return (
    <div className={styles.pageWrapperFixed}>
      {props.children}
    </div>
  );
}
