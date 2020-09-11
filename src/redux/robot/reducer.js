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
        coord: moveForward(state),
      }

    case robotActionType.TURN_LEFT:
      return {
        ...state,
        face: turnLeft(state.face),
      }
    
    case robotActionType.TURN_RIGHT:
      return {
        ...state,
        face: turnRight(state.face),
      }
    
    case robotActionType.REPORT_CURRENT:
      return state;

    default:
      return state;
  }
};

const moveForward = (state) => {
  const { coord, face } = state;
  console.log(typeof(coord.x));
  return {
    NORTH: {
      ...coord,
      x: coord.x - 1,
    },
    EAST: {
      ...coord,
      y: coord.y + 1,
    },
    SOUTH: {
      ...coord,
      x: coord.x + 1,
    },
    WEST: {
      ...coord,
      y: coord.y - 1,
    },
  }[face]
};

const turnLeft = (direction) => {
  return {
    NORTH: "WEST",
    EAST: "NORTH",
    SOUTH: "EAST",
    WEST: "SOUTH",
  }[direction];
}

const turnRight = (direction) => {
  return {
    NORTH: "EAST",
    EAST: "SOUTH",
    SOUTH: "WEST",
    WEST: "NORTH",
  }[direction];
}

export default robotReducer;