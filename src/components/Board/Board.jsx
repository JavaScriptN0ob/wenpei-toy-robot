import React from 'react';
import { connect } from 'react-redux';

import styles from './Board.module.css';

import Row from './Row';
import Cell from './Cell';
import Robot from '../Robot';
import gameBoard from '../../redux/selectors/gameBoard';

function Board({ gameBoard }) {
  return (
    <div className={styles.board__container}>
      {gameBoard.map(({ y, cells }) => (
        <Row key={y}>
          {cells.map(({ x, element }) => 
            <React.Fragment>
              {element !== undefined ? (
                <Robot key={`${x},${y}`} {...element} />
              ) : (
                <Cell key={`${x},${y}`} />
              )}
            </React.Fragment>
          )}
        </Row>
      ))}
    </div>
  )
}

const mapStateToProps = (state) => ({
  gameBoard: gameBoard(state),
});


export default connect(mapStateToProps)(Board);