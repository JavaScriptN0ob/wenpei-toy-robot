import robotActionType from './type';

export const placeRobot = (x, y, face) => ({
  type: robotActionType.PLACE_ROBOT,
  payload: {
    x,
    y,
    face,
  },
});

export const moveForward = () => ({
  type: robotActionType.MOVE_FORWARD,
});

export const turnLeft = () => ({
  type: robotActionType.TURN_LEFT,
});

export const turnRight = () => ({
  type: robotActionType.TURN_RIGHT,
});

export const reportCurrentPosition = () => ({
  type: robotActionType.REPORT_CURRENT,
});