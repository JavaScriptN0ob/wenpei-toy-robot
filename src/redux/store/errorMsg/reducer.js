import { INITIAL_ERROR_MESSAGE } from '../../../constants';

const errorMsgReducer = (state = INITIAL_ERROR_MESSAGE, action) => {
  switch (action.type) {
    default:
      return state;
  };
};

export default errorMsgReducer;