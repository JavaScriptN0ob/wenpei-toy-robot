import { GAME_BOARD_INITIAL_SIZE } from '../../../constants';

/**
 *
 * board
 * {
 *  config: {
 *    xs: 5,
 *    ys: 5,
 *  }
 * }  */ 

const gameBoardReducer = (state = GAME_BOARD_INITIAL_SIZE, action) => {
  switch (action.type) {
    default:
      return state;
  };
};

export default gameBoardReducer;