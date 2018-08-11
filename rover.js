const R = require("ramda");

const rover = position =>
  R.pipe(
    R.split(""),
    R.reduce(executeSingleCommand)(position)
  );

const executeSingleCommand = (position, command) => {
  switch (command) {
    case "L":
      return { ...position, direction: turnLeft(position.direction) };
    case "R":
      return { ...position, direction: turnRight(position.direction) };
    case "F":
      return moveForward(position);
    default:
      throw new Error("can only turn left or right!");
  }
};

const moveForward = ({ x, y, direction }) => {
  switch (direction) {
    case "N":
      return { x, y: y - 1, direction };
    default:
      throw new Error("cannot move forward!");
  }
};

const directions = ["N", "E", "S", "W"];

const turnLeft = direction => {
  switch (direction) {
    case "N":
      return "W";
    case "E":
      return "N";
    case "S":
      return "E";
    case "W":
      return "S";
    default:
      return "ERROR!";
  }
};

const turnRight = direction => {
  switch (direction) {
    case "N":
      return "E";
    case "E":
      return "S";
    case "S":
      return "W";
    case "W":
      return "N";
    default:
      return "ERROR!";
  }
};

module.exports = rover;
