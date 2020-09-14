const main = () => {
  const board = new Board(5, 5);

  const game = new Game(board);
  
  const command = new Command();
  command.operate(game);

  command.listen();
};

class Board {
  constructor(xs, ys) {
    this.xs = xs;
    this.ys = ys;
  }
}

class Game {
  constructor(board) {
    this.board = board;
  }

  place(robot) {
    this.robot = robot;
    robot.join(this);
  }

  isValidCoord(coord) {
    const { xs, ys } = this.board;

    const isValidX = coord.x >= 0 && coord.x < xs;
    const isValidY = coord.y >= 0 && coord.y < ys;
      
    return isValidX && isValidY; 
  }
}

class Robot {
  constructor({ coord, face }) {
    this.coord = coord;
    this.face = face;
  }

  join(game) {
    this.game = game;
  }

  move() {
    const { coord, face } = this;

    const newCoord = {
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
    }[face];

    const isValidCoord = this.game.isValidCoord(newCoord);
    if (!isValidCoord) {
      return;
    }
    
    this.coord = newCoord;
  }

  left() {}

  right() {}

  report() {}
}

class Command {
  operate(target) {
    this.target = target;
  }

  placeRobot(x, y, f) {
    const isValidCoord = this.target.isBoardCoordValid({ x, y });

    if (!isValidCoord) {
      console.error('INVALID INPUT')
    }

    const robot = new Robot({
      coord: { x, y },
      face: f,
    });

    this.target.place(robot);
  }

  moveRobot() {
    this.target.robot.move();
  }

  leftRobot() {
    this.target.robot.left();
  }

  rightRobot() {
    this.target.robot.right();
  }

  reportRobot() {
    this.target.robot.report();
  }

  listen() {
    const input = readline();

    switch(input.string) {
      case 'PLACE *':
        const { x, y, f } = input.args;

        this.placeRobot(x, y ,f);
        break;

      case 'MOVE': 
        this.moveRobot();
        break;

      case 'LEFT':
        this.leftRobot();
        break;

      case 'RIGHT':
        this.rightRobot();
        break;

      case 'REPORT':
        this.reportRobot();
        break;
      
      default:
        console.error('INVALID INPUT');
        break;
    }
  }
}

main();