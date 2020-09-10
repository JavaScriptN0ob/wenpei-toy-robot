import robotActionType from './type';
import { INITIAL_ROBOT_STATE } from '../../constants';

const robotReducer = (state = INITIAL_ROBOT_STATE, action) => {
  switch (action.type) {
    case robotActionType.PLACE_ROBOT:
      return {
        coord: {
          x: action.payload.x,
          y: action.payload.y,
        },
        face: action.payload.face,
      }
    
    case robotActionType.MOVE_FORWARD:
      return {
        ...state,
        state: moveForward(state)
      }

    case robotActionType.TURN_LEFT:
      return {
        ...state
      }
    
    case robotActionType.TURN_RIGHT:
      return {
        ...state
      }
    
    case robotActionType.REPORT_CURRENT:
      return {
        ...state
      }

    default:
      return state;
  }
};

const moveForward = (state) => {
  const { coord, face } = state;

  return {
    NORTH: {
      ...coord,
      y: coord.y++,
    },
    EAST: {
      ...coord,
      x: coord.x++,
    },
    SOUTH: {
      ...coord,
      y: coord.y--
    },
    WEST: {
      ...coord,
      x: coord.x--,
    },
  }[face]
};

export default robotReducer;