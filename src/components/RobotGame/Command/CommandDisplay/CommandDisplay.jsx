import React from 'react';
import { connect } from 'react-redux';

import styles from './CommandDisplay.module.css';


function CommandDisplay({ gameSize, coord, face, errorMsg }) {
  return (
    <div>
      command display
      {
        console.log(gameSize, coord, face, errorMsg)
      }
    </div>
  );
};


const mapStateToProps = (state) => ({
  gameSize: state.gameBoardSize.coord,
  coord: state.robot.coord,
  face: state.robot.face,
  errorMsg: state.errorMsg,
})

export default connect(mapStateToProps)(CommandDisplay);