import React from 'react';
import { connect } from 'react-redux';

import styles from './Command.module.css';

import { placeRobot, moveForward, turnLeft, turnRight, reportCurrentPosition } from '../../redux/robot/action';

function Command({ 
  robot, 
  dispatchPlaceRobot,
  dispatchMoveForward,
  dispatchTurnLeft,
  dispatchTurnRight,
  dispatchReport,
}) {
  return (
    <div className={styles.command__container}>
      <button 
        onClick={() => dispatchPlaceRobot(0, 0, "EAST")}
      >
        Place to original place
      </button>
      <button onClick={() => dispatchTurnLeft(robot.face)}>
        Turn Left
      </button>
      <button onClick={() => dispatchTurnRight(robot.face)}>
        Turn Right
      </button>
      <button onClick={() => dispatchMoveForward()}>
        Move Forward
      </button>
      <button onClick={() => console.log(robot)}>
        Report
      </button>
      {console.log(robot)}
    </div>
  )
}

const mapStateToProps = (state) => ({
  robot: state.robot,
})

const mapDispatchToProps = (dispatch) => ({
  dispatchPlaceRobot: (x, y, face) => dispatch(placeRobot(x, y, face)),
  dispatchMoveForward: () => dispatch(moveForward()),
  dispatchTurnLeft: (face) => dispatch(turnLeft(face)),
  dispatchTurnRight: (face) => dispatch(turnRight(face)),
  dispatchReport: () => dispatch(reportCurrentPosition()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Command);