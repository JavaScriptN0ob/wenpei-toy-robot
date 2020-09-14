import { createSelector } from 'reselect';

/**
 * 
 * 1. build up a board
 * 2. get robot and assign in to board (place/move robot on board)
 * 
 * Goal: build up a game board
 * 
 * [
 *  [undefined, undefined, undefined, undefined, undefined],
 *  [undefined, undefined, undefined, undefined, undefined],
 *  [undefined, undefined, undefined, undefined, undefined],
 *  [undefined, undefined, undefined, undefined, undefined],
 *  [Robot,     undefined, undefined, undefined, undefined],
 * ]
 * 
 *  */

const selectBoardSize = ({ gameBoardSize }) => ({
  xs: gameBoardSize.coord.xs,
  ys: gameBoardSize.coord.ys,
});

const selectRobot = ({ robot }) => robot;

const buildGameBoard = (boardSize, robot) => {
  const { xs, ys } = boardSize;
  const gameBoard = [];

    for (let y = (ys - 1); y >= 0; y --) {
      const row = {
        y,
        cells: [],
      };

      for (let x = 0; x < xs; x ++) {
        const isRobot = robot.coord.x === x && robot.coord.y === y;

        row.cells.push({
          x,
          element: isRobot ? robot : undefined
        });
      }

      gameBoard.push(row);
    }

    return gameBoard;  
}

export default createSelector(
  selectBoardSize,
  selectRobot,
  buildGameBoard,
);