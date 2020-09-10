import React from 'react';

import styles from './Robot.module.css';

import Command from './Command'

function RobotGame() {
  return (
    <div className={styles.robot_game__container}>
      ROBOT GAME
      <Command />
    </div>
  );
};

export default RobotGame;