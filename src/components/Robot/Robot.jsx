import React from 'react';
import classNames from 'classnames/bind';

import styles from './Robot.module.css';

const cx = classNames.bind(styles);

function Robot({ face }) {
  return (
    <div className={cx({
      robot_east: face === "EAST",
      robot_west: face === "WEST",
      robot_north: face === "NORTH",
      robot_south: face === "SOUTH",
    })} />
  )
};

export default Robot;