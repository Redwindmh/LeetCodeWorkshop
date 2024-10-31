
let distanceRoutine = (vec1, vec2) => {
  let xsqr = (vec1[0] + vec2[0]) ** 2;
  let ysqr = (vec1[1] + vec2[1]) ** 2;
  return (xsqr + ysqr) ** 0.5;
}

//write a function that takes in an array of positions, a goal, and distance routine
//return the average distance to goal

//postions (array of xy coords)-> [12, 0] (x/y positions)
//positions example: [[0,0], [1, 2], [999,999]]
//goalPosition (xy coord) -> [0,0]
//distanceRoutine (function)

let averageDistanceToGoal = (positions, goalPosition, distanceRoutine) => {
  // let dist1 = distanceRoutine(positions[0], goalPosition);
  let distances = [];

  for (let i = 0; i < positions.length; i++) {
    distances.push(distanceRoutine(positions[i], goalPosition));
  };

  let distanceSum = 0;

  for (let n = 0; n < distances.length; n++) {
    distanceSum += distances[n];
  };

  let averageDist = distanceSum / distances.length;

  return averageDist;
};


let goal = [10, 10]
let positions = [
  [0, 0],
  [1, 2],
  [999, 999]
]
// averageDistanceToGoal(positions, goal, distanceRoutine) //485.7874802180945

console.log(averageDistanceToGoal(positions, goal, distanceRoutine))

// Ean's solution:

/*
let averageDistanceToGoal = (positions, goalPositon, distanceRoutine) => {
    let distanceSum = positions
        .map((pos) => {
            return distanceRoutine(pos, goalPositon);
        })
        .reduce((a, b) => {
            return a + b;
        });
    return distanceSum/positions.length;
}
*/
