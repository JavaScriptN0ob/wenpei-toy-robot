import { combineReducers } from 'redux';

import gameBoardReducer from './gameBoard/reducer';
import robotReducer from './robot/reducer';
import errorMsgReducer from './errorMsg/reducer';

const rootReducer = combineReducers({
  gameBoardSize: gameBoardReducer,
  robot: robotReducer,
  errorMsg: errorMsgReducer,
});

export default rootReducer;