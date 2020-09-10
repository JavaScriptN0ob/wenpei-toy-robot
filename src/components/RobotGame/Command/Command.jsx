import React from 'react';

import styles from './Command.module.css';

import CommandDisplay from './CommandDisplay';

function Command() {
  return (
    <div className={styles.command__container}>
      command test
      <CommandDisplay />
    </div>
  )
}

export default Command;