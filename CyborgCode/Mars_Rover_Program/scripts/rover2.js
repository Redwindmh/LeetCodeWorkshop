// Write a program that takes in commands and moves one or more robots around Mars.
// -The world should be modelled as a grid with size m x n
// -Your program should read the input, update the robots, and print out the final states of the robots
// -Each robot has a position (x,y), and an orientation (N,E,S,W)
// -Each robot can move forward one space (F), rotate left by 90 degrees (L), or rotate right by 90 degrees (R)
// -If a robot moves off the grid, it is marked as 'lost', and its last valid grid position and orientation is recorded
// -Going from x -> x + 1 is in the easterly direction, and y -> y + 1 is in the notherly direction. i.e. (0,0) represents the south-west corner of the grid
//
// The input takes the form:
// 4 8
// (2, 3, E) LFRFF
// (0, 2, N) FFLFRFF
//
// The first line of the input '4 8' specifies the size of the grid. The subsequent lines each represent the initial state of the form (x, y, orientation). FFLFRFF represents the sequence of movement commands for the robot.
//
// The output should take the form:
// (4, 4, E)
// (0, 4, W) LOST
//
// Each line represents the final position and orientation of the robots of the form (x, y, orientation) and optionally whether the robot was lost.

function mapGrid(gridX, gridY) {
  let marsGrid = {
    x : gridX,
    y : gridY
  };
  console.log(marsGrid)
  return marsGrid;
}

function moveRover(initState, command) {
  const directions = ["N","E","S","W"];

  let roverPos = {
    x : 0,
    y : 0,
    facing : ""
  };

  roverPos.x = initState[0];
  roverPos.y = initState[1];
  roverPos.facing = initState[2]

  console.log(roverPos)

  for (let i = 0; i < command.length; i++) {
    if (command[i] === "R") {
      console.log(directions.indexOf(roverPos.facing));
      int() += 1

      console.log("Rover is turns right.", roverPos)
    };
  };
};


mapGrid(4,8);
moveRover([2,3,"E"], "LFRFF")
