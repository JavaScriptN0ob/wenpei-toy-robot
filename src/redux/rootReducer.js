import { combineReducers } from 'redux';

import gameBoardReducer from './gameBoard/reducer';

const rootReducer = combineReducers({
  size: gameBoardReducer,
});

export default rootReducer;