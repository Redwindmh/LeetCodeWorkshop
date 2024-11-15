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
const inputData = document.getElementById("input-data")

inputData.addEventListener("submit", (e) => {
  e.preventDefault()

  const roverData = {
    grid : document.getElementById("grid-input").value,
    initPOS : document.getElementById("initial-state").value,
    commmand : document.getElementById("command").value
  }

    let gridBlock = document.createElement("div")
    gridBlock.textContent = "Test"
    gridBlock.style.display = "inline"
    document.body.appendChild(gridBlock)



})
