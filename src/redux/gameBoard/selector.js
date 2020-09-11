import { createSelector } from 'reselect';

const selectBoardSize = ({ gameBoardSize }) => ({
  xs: gameBoardSize.coord.xs,
  ys: gameBoardSize.coord.ys,
});

export const selectBoardDimension = createSelector(
  [selectBoardSize],
  ({ xs, ys }) => {
    let board = [], row = [];

    for (let i = 0; i < ys; i ++) {
      row.push(i)
    }

    for (let i = 0; i < xs; i ++) {
      board.push(row.concat())
    }

    return board;  
  }
)