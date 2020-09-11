import React from 'react';
import { connect } from 'react-redux';

import styles from './Board.module.css';

import Row from './Row';
import Cell from './Cell';
import Robot from '../Robot';
import { selectBoardDimension } from '../../redux/gameBoard/selector';

function Board({ board, robot }) {
  return (
    <div className={styles.board__container}>
      {board.map((row, xs) => (
          <Row key={xs}>
            {row.map((ys) => (
              (xs === robot.coord.x && ys === robot.coord.y) ? (
                <Robot key={ys} face={robot.face} />
              ) : (
                <Cell key={ys} />
              )
            ))}
          </Row>
        ))
      }
    </div>
  )
}

const mapStateToProps = (state) => ({
  board: selectBoardDimension(state),
  robot: state.robot,
});


export default connect(mapStateToProps)(Board);