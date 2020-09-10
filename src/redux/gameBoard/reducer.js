import { GAME_BOARD_INITIAL_SIZE } from '../../constants';

const gameBoardReducer = (state = GAME_BOARD_INITIAL_SIZE, action) => {
  switch (action.type) {
    default:
      return state;
  };
};

export default gameBoardReducer;